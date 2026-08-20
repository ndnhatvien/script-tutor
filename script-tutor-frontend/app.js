// Main Application Logic for TCL & Bash Script Tutor IDE
(function() {
    'use strict';

    // State Variables
    let editor = null;
    let currentLanguage = 'bash';
    let currentLesson = null;
    let isDarkTheme = true;
    let fontSize = 14;
    let viewMode = 'editor'; // 'editor', 'theory', 'split'
    let searchQuery = '';
    let completedLessons = new Set();

    // DOM Elements Cache
    let elements = {};

    // Load completed lessons from localStorage
    function loadCompletedLessons() {
        try {
            const saved = localStorage.getItem('script_tutor_completed');
            if (saved) {
                completedLessons = new Set(JSON.parse(saved));
            }
        } catch (e) {
            console.warn('Could not load completed lessons from localStorage', e);
        }
    }

    // Save completed lessons to localStorage
    function saveCompletedLessons() {
        try {
            localStorage.setItem('script_tutor_completed', JSON.stringify(Array.from(completedLessons)));
        } catch (e) {
            console.warn('Could not save completed lessons to localStorage', e);
        }
    }

    // Initialize Monaco Editor
    function initEditor() {
        if (typeof require === 'undefined') return;

        require.config({
            paths: {
                vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
            }
        });

        require(['vs/editor/editor.main'], function() {
            editor = monaco.editor.create(elements.editor, {
                value: '# Chọn bài học từ danh sách bên trái để bắt đầu\n',
                language: 'shell',
                theme: isDarkTheme ? 'vs-dark' : 'vs',
                fontSize: fontSize,
                minimap: CONFIG.EDITOR.minimap,
                scrollBeyondLastLine: CONFIG.EDITOR.scrollBeyondLastLine,
                automaticLayout: CONFIG.EDITOR.automaticLayout,
                wordWrap: CONFIG.EDITOR.wordWrap,
                padding: { top: 12, bottom: 12 },
                lineNumbersMinChars: 3,
                fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace"
            });

            // Keyboard shortcut: Ctrl+Enter to run
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, runCode);

            // Select first lesson automatically once ready
            const lessons = LESSONS[currentLanguage] || [];
            if (lessons.length > 0) {
                selectLesson(lessons[0]);
            }
        });
    }

    // Update Progress Indicator
    function updateProgress() {
        const lessons = LESSONS[currentLanguage] || [];
        const total = lessons.length;
        if (total === 0) return;

        let completedCount = 0;
        lessons.forEach(l => {
            if (completedLessons.has(l.id)) completedCount++;
        });

        const percent = Math.round((completedCount / total) * 100);
        elements.progressText.textContent = `${completedCount}/${total} đã học`;
        elements.progressBar.style.width = `${percent}%`;
    }

    // Load and filter lessons in sidebar
    function renderLessons() {
        const lessons = LESSONS[currentLanguage] || [];
        elements.lessonsContainer.innerHTML = '';

        const query = searchQuery.trim().toLowerCase();
        const filtered = lessons.filter(l => {
            if (!query) return true;
            return l.title.toLowerCase().includes(query) || (l.description && l.description.toLowerCase().includes(query));
        });

        if (filtered.length === 0) {
            elements.lessonsContainer.innerHTML = `
                <div style="padding: 1.5rem; text-align: center; color: var(--text-subtle); font-size: 0.85rem;">
                    Không tìm thấy bài học nào phù hợp.
                </div>
            `;
            return;
        }

        filtered.forEach(lesson => {
            const isCompleted = completedLessons.has(lesson.id);
            const isActive = currentLesson && currentLesson.id === lesson.id;

            const item = document.createElement('div');
            item.className = `lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            item.dataset.id = lesson.id;

            item.innerHTML = `
                <div class="lesson-item-header">
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-status-icon">${isCompleted ? '✓' : '•'}</div>
                </div>
                <div class="lesson-description">${lesson.description || ''}</div>
            `;

            item.addEventListener('click', () => selectLesson(lesson));
            elements.lessonsContainer.appendChild(item);
        });

        updateProgress();
    }

    // Select a specific lesson
    function selectLesson(lesson) {
        currentLesson = lesson;

        // Update Active styling in Sidebar
        document.querySelectorAll('.lesson-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === lesson.id);
        });

        // Update Editor content
        if (editor) {
            editor.setValue(lesson.code || '');
        }

        // Update Header Title & Badge
        elements.currentLessonTitle.textContent = lesson.title;
        elements.lessonBadge.textContent = currentLanguage.toUpperCase();

        // Update Completed Tag Button State
        updateCompletionButton();

        // Render Theory Markdown
        renderTheory(lesson.explanation);

        // Close sidebar on mobile
        elements.sidebar.classList.remove('open');
    }

    // Toggle lesson completed state
    function toggleLessonCompletion() {
        if (!currentLesson) return;

        if (completedLessons.has(currentLesson.id)) {
            completedLessons.delete(currentLesson.id);
        } else {
            completedLessons.add(currentLesson.id);
        }

        saveCompletedLessons();
        updateCompletionButton();
        renderLessons();
    }

    function updateCompletionButton() {
        if (!currentLesson) return;
        const isDone = completedLessons.has(currentLesson.id);
        if (isDone) {
            elements.toggleCompleteBtn.classList.add('is-completed');
            elements.toggleCompleteBtn.querySelector('.complete-text').textContent = 'Đã hoàn thành';
        } else {
            elements.toggleCompleteBtn.classList.remove('is-completed');
            elements.toggleCompleteBtn.querySelector('.complete-text').textContent = 'Chưa hoàn thành';
        }
    }

    // Setup and register TCL grammar for Highlight.js
    function setupHljsLanguages() {
        if (typeof hljs === 'undefined') return;

        try {
            hljs.registerLanguage('tcl', function(hljsInstance) {
                return {
                    name: 'Tcl',
                    aliases: ['tcl', 'tk', 'wish', 'tclsh'],
                    keywords: {
                        $pattern: /[\w:-]+/,
                        keyword: 'after append apply array bgerror binary break catch cd chan clock close concat continue coroutine dputs dump encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent flush for foreach format gets glob global history http if incr info interp join lappend lassign lindex linsert list llength lmap load loadTk lrange lrepeat lreplace lreverse lsearch lset lsort mathfunc mathop memory msgcat my namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell prefix proc puts pwd read refchan regexp registry regsub rename return safe scan seek self set socket source split string subst switch tailcall tell throw time timerate trace try unknown unload unset update uplevel upvar variable vwait while yield yieldto yieldm zlib then else elseif',
                        literal: 'true false yes no stdin stdout stderr env argc argv argv0',
                        built_in: 'puts set expr proc format open close gets read incr append llength lindex lappend foreach while for return switch info eval catch error string'
                    },
                    contains: [
                        hljsInstance.COMMENT('#', '$'),
                        {
                            className: 'string',
                            begin: '"',
                            end: '"',
                            contains: [
                                hljsInstance.BACKSLASH_ESCAPE,
                                {
                                    className: 'variable',
                                    begin: '\\$[a-zA-Z0-9_:]+|\\$\\{[^}]+\\}'
                                },
                                {
                                    className: 'subst',
                                    begin: '\\[',
                                    end: '\\]'
                                }
                            ]
                        },
                        {
                            className: 'variable',
                            variants: [
                                { begin: '\\$[a-zA-Z0-9_:]+' },
                                { begin: '\\$\\{[^}]+\\}' },
                                { begin: '\\$[a-zA-Z0-9_:]+\\([^)]+\\)' }
                            ]
                        },
                        {
                            className: 'number',
                            begin: '\\b\\d+(\\.\\d+)?\\b',
                            relevance: 0
                        },
                        {
                            className: 'attr',
                            begin: '-[a-zA-Z0-9_]+',
                            relevance: 0
                        }
                    ]
                };
            });
        } catch (e) {
            console.warn('Could not register TCL grammar in hljs', e);
        }
    }

    // Helper for clipboard copying with fallback
    function copyTextToClipboard(text, onSuccess) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
                fallbackClipboardCopy(text);
                onSuccess();
            });
        } else {
            fallbackClipboardCopy(text);
            onSuccess();
        }
    }

    function fallbackClipboardCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (e) {
            console.warn('Fallback copy failed', e);
        }
        document.body.removeChild(textArea);
    }

    // Render Theory Markdown into Theory Pane
    function renderTheory(markdownText) {
        if (!elements.theoryContent) return;

        if (!markdownText || !markdownText.trim()) {
            elements.theoryContent.innerHTML = '<p style="color: var(--text-subtle); padding: 1rem 0;"><em>Chưa có tài liệu lý thuyết chi tiết cho bài học này.</em></p>';
            return;
        }

        if (typeof marked !== 'undefined') {
            try {
                // marked v9+: pass options directly to parse() instead of setOptions()
                elements.theoryContent.innerHTML = marked.parse(markdownText, { gfm: true, breaks: true });
            } catch (err) {
                console.error('Error parsing markdown', err);
                elements.theoryContent.innerHTML = `<pre style="white-space: pre-wrap;">${markdownText}</pre>`;
            }

            // Post-process all code blocks to add IDE Window headers and interactive copy buttons
            const codeBlocks = elements.theoryContent.querySelectorAll('pre');
            codeBlocks.forEach((preElement) => {
                const codeElement = preElement.querySelector('code') || preElement;
                const rawCode = codeElement.textContent || '';
                
                // Determine language
                let lang = '';
                const classNames = (codeElement.className || '').split(/\s+/);
                for (const cls of classNames) {
                    if (cls.startsWith('language-')) {
                        lang = cls.replace('language-', '').toLowerCase();
                        break;
                    }
                }
                if (!lang || lang === 'undefined') {
                    lang = currentLanguage; // default to 'tcl' or 'bash'
                }

                // Highlight code
                let highlightedHtml = '';
                if (typeof hljs !== 'undefined') {
                    try {
                        if (hljs.getLanguage(lang)) {
                            highlightedHtml = hljs.highlight(rawCode, { language: lang, ignoreIllegals: true }).value;
                        } else {
                            highlightedHtml = hljs.highlightAuto(rawCode).value;
                        }
                    } catch (e) {
                        highlightedHtml = hljs.escapeHTML(rawCode);
                    }
                } else {
                    highlightedHtml = rawCode.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }

                // Display info for badge
                const langUpper = lang.toUpperCase();
                const isTcl = (langUpper === 'TCL');
                const isBash = (langUpper === 'BASH' || langUpper === 'SH' || langUpper === 'SHELL');
                const langIcon = isTcl ? '⚙️' : isBash ? '🐚' : '💻';
                const langLabel = isTcl ? 'TCL Script' : isBash ? 'Bash Shell' : langUpper;

                // Create Modern IDE Snippet Card
                const snippetBox = document.createElement('div');
                snippetBox.className = `code-snippet-box lang-${lang}`;
                snippetBox.innerHTML = `
                    <div class="snippet-header">
                        <div class="snippet-dots">
                            <span class="dot dot-red"></span>
                            <span class="dot dot-yellow"></span>
                            <span class="dot dot-green"></span>
                        </div>
                        <div class="snippet-lang-tag">
                            <span class="snippet-lang-icon">${langIcon}</span>
                            <span class="snippet-lang-text">${langLabel}</span>
                        </div>
                        <button class="btn-copy-snippet" type="button" title="Sao chép đoạn mã">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span class="copy-label">Sao chép</span>
                        </button>
                    </div>
                    <pre class="snippet-body"><code class="hljs language-${lang}">${highlightedHtml}</code></pre>
                `;

                // Add interactive copy event listener with robust feedback
                const copyBtn = snippetBox.querySelector('.btn-copy-snippet');
                const copyLabel = snippetBox.querySelector('.copy-label');
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    copyTextToClipboard(rawCode, () => {
                        copyBtn.classList.add('copied');
                        copyLabel.textContent = 'Đã chép ✓';
                        setTimeout(() => {
                            copyBtn.classList.remove('copied');
                            copyLabel.textContent = 'Sao chép';
                        }, 2000);
                    });
                });

                // Replace the plain <pre> with the new enriched snippetBox
                preElement.parentNode.replaceChild(snippetBox, preElement);
            });
        } else {
            // Fallback if marked library fails to load
            elements.theoryContent.innerHTML = `<pre style="white-space: pre-wrap;">${markdownText}</pre>`;
        }
    }

    // Set View Mode (Editor, Theory, Split)
    function setViewMode(mode) {
        viewMode = mode;
        elements.workspaceBody.className = `workspace-body view-mode-${mode}`;

        // Update active tab buttons
        document.querySelectorAll('.mode-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === mode);
        });

        // Trigger monaco editor layout resize
        if (editor) {
            setTimeout(() => editor.layout(), 50);
        }
    }

    // Change Font Size
    function changeFontSize(delta) {
        fontSize = Math.min(Math.max(fontSize + delta, 10), 24);
        if (editor) {
            editor.updateOptions({ fontSize: fontSize });
        }
    }

    // Copy Code to Clipboard
    function copyCode() {
        if (!editor) return;
        const code = editor.getValue();
        navigator.clipboard.writeText(code).then(() => {
            showToast('Đã sao chép code vào clipboard!');
        });
    }

    // Copy Output to Clipboard
    function copyOutput() {
        const text = elements.output.textContent;
        navigator.clipboard.writeText(text).then(() => {
            showToast('Đã sao chép console output!');
        });
    }

    // Simple Toast Notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--accent-blue);
            color: #fff;
            padding: 0.6rem 1.2rem;
            border-radius: var(--radius-md);
            font-size: 0.85rem;
            font-weight: 500;
            z-index: 3000;
            box-shadow: var(--shadow-lg);
            transition: opacity 0.3s ease;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    // Run Code API Call
    async function runCode() {
        if (!editor) return;
        const code = editor.getValue().trim();

        if (!code) {
            showOutput('⚠️ Vui lòng nhập dòng lệnh trước khi chạy!', false);
            updateStatusBadge('error', 'Trống');
            return;
        }

        // Show Loading Overlay & Status
        elements.loadingIndicator.classList.remove('hidden');
        updateStatusBadge('running', 'Executing...');
        elements.output.textContent = '⚡ Đang thực thi script trên server...';
        elements.output.className = 'output-content';
        elements.executionTime.textContent = '';

        try {
            const startTime = performance.now();

            const response = await fetch(`${CONFIG.API_URL}/${currentLanguage}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    timeout: CONFIG.DEFAULT_TIMEOUT
                })
            });

            const endTime = performance.now();
            const localTime = ((endTime - startTime) / 1000).toFixed(3);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.success) {
                showOutput(data.output || '(Không có kết quả xuất ra)', true);
                elements.executionTime.textContent = `⏱️ ${data.execution_time || localTime}s`;
                updateStatusBadge('success', 'Thành công 200');

                // Auto mark completed on successful run
                if (currentLesson && !completedLessons.has(currentLesson.id)) {
                    completedLessons.add(currentLesson.id);
                    saveCompletedLessons();
                    updateCompletionButton();
                    renderLessons();
                }
            } else {
                showOutput(data.error || 'Thực thi thất bại với lỗi không xác định.', false);
                updateStatusBadge('error', 'Lỗi thực thi');
            }

        } catch (error) {
            showOutput(`❌ Không thể kết nối đến máy chủ thực thi backend:\n${error.message}\n\nHướng dẫn khắc phục:\n1. Kiểm tra API_URL trong config.js\n2. Đảm bảo Backend Railway API đang hoạt động\n3. Trình duyệt không bị chắn bởi Extension/CORS Block.`, false);
            updateStatusBadge('error', 'Lỗi kết nối');
        } finally {
            elements.loadingIndicator.classList.add('hidden');
        }
    }

    // Update Status Badge in Console
    function updateStatusBadge(type, text) {
        elements.statusBadge.className = `status-badge status-${type}`;
        elements.statusBadge.textContent = text;
    }

    // Show Output text in terminal
    function showOutput(text, isSuccess) {
        elements.output.textContent = text;
        elements.output.className = 'output-content ' + (isSuccess ? 'success' : 'error');
    }

    // Clear Console Output
    function clearOutput() {
        elements.output.textContent = '';
        elements.output.className = 'output-content';
        elements.executionTime.textContent = '';
        updateStatusBadge('idle', 'Ready');
    }

    // Reset Code to Original Lesson Snippet
    function resetCode() {
        if (currentLesson && editor) {
            editor.setValue(currentLesson.code || '');
            clearOutput();
            showToast('Đã khôi phục code ban đầu!');
        }
    }

    // Switch Language (Bash <-> TCL)
    function switchLanguage(lang) {
        if (currentLanguage === lang) return;
        currentLanguage = lang;
        currentLesson = null;

        // Update Language Pills UI
        document.querySelectorAll('.lang-pill').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update Editor Language Mode in Monaco
        if (editor) {
            const model = editor.getModel();
            monaco.editor.setModelLanguage(model, lang === 'tcl' ? 'tcl' : 'shell');
        }

        // Search Reset & Re-render Lessons
        searchQuery = '';
        elements.lessonSearch.value = '';
        elements.clearSearchBtn.classList.add('hidden');
        renderLessons();

        // Select first lesson of the new language
        const lessons = LESSONS[lang] || [];
        if (lessons.length > 0) {
            selectLesson(lessons[0]);
        }

        clearOutput();
    }

    // Toggle Dark / Light Theme
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);

        if (editor) {
            monaco.editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs');
        }

        elements.themeToggle.querySelector('.theme-icon').textContent = isDarkTheme ? '🌙' : '☀️';
    }

    // Helper: safely add event listener, skip if element is null
    function on(el, event, fn) {
        if (el) el.addEventListener(event, fn);
        else console.warn('Missing element for event:', event);
    }

    // Setup Global Event Handlers
    function setupEventListeners() {
        try {
            // Run, Reset, Copy, Clear
            on(elements.runBtn, 'click', runCode);
            on(elements.resetBtn, 'click', resetCode);
            on(elements.copyCodeBtn, 'click', copyCode);
            on(elements.copyOutputBtn, 'click', copyOutput);
            on(elements.clearOutputBtn, 'click', clearOutput);

            // Completion Tag Toggle
            on(elements.toggleCompleteBtn, 'click', toggleLessonCompletion);

            // Font Size Controls
            on(elements.fontSizeInc, 'click', () => changeFontSize(1));
            on(elements.fontSizeDec, 'click', () => changeFontSize(-1));

            // Language Pills
            document.querySelectorAll('.lang-pill').forEach(btn => {
                btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
            });

            // View Mode Tabs
            document.querySelectorAll('.mode-tab').forEach(btn => {
                btn.addEventListener('click', () => setViewMode(btn.dataset.view));
            });

            // Search Filtering
            on(elements.lessonSearch, 'input', (e) => {
                searchQuery = e.target.value;
                elements.clearSearchBtn.classList.toggle('hidden', !searchQuery);
                renderLessons();
            });

            on(elements.clearSearchBtn, 'click', () => {
                searchQuery = '';
                elements.lessonSearch.value = '';
                elements.clearSearchBtn.classList.add('hidden');
                renderLessons();
            });

            // Theme Toggle
            on(elements.themeToggle, 'click', toggleTheme);

            // Mobile Sidebar Drawer
            on(elements.sidebarMobileToggle, 'click', () => {
                elements.sidebar.classList.add('open');
            });

            on(elements.sidebarCloseBtn, 'click', () => {
                elements.sidebar.classList.remove('open');
            });

            // Shortcuts Modal
            on(elements.shortcutsBtn, 'click', () => {
                elements.shortcutsModal.classList.remove('hidden');
            });

            on(elements.closeShortcutsBtn, 'click', () => {
                elements.shortcutsModal.classList.add('hidden');
            });

            on(elements.shortcutsModal, 'click', (e) => {
                if (e.target === elements.shortcutsModal) {
                    elements.shortcutsModal.classList.add('hidden');
                }
            });

            // Global Keyboard Shortcuts
            document.addEventListener('keydown', (e) => {
                // Ctrl+/ to toggle shortcuts modal
                if (e.ctrlKey && e.key === '/') {
                    e.preventDefault();
                    if (elements.shortcutsModal) elements.shortcutsModal.classList.toggle('hidden');
                }
                // Ctrl+R to reset code
                if (e.ctrlKey && (e.key === 'r' || e.key === 'R')) {
                    e.preventDefault();
                    resetCode();
                }
                // Ctrl+K to clear console output
                if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
                    e.preventDefault();
                    clearOutput();
                }
                // Ctrl+= (or Ctrl++) to increase font size
                if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
                    e.preventDefault();
                    changeFontSize(1);
                }
                // Ctrl+- to decrease font size
                if (e.ctrlKey && e.key === '-') {
                    e.preventDefault();
                    changeFontSize(-1);
                }
            });

            console.log('✅ Event listeners registered successfully');
        } catch (err) {
            console.error('❌ Failed to register event listeners:', err);
        }
    }

    // App Initialization
    function init() {
        loadCompletedLessons();

        // Cache DOM elements
        elements = {
            lessonsContainer: document.getElementById('lessonsContainer'),
            editor: document.getElementById('editor'),
            output: document.getElementById('output'),
            runBtn: document.getElementById('runCode'),
            resetBtn: document.getElementById('resetCode'),
            copyCodeBtn: document.getElementById('copyCodeBtn'),
            copyOutputBtn: document.getElementById('copyOutputBtn'),
            clearOutputBtn: document.getElementById('clearOutput'),
            toggleCompleteBtn: document.getElementById('toggleCompleteBtn'),
            fontSizeInc: document.getElementById('fontSizeInc'),
            fontSizeDec: document.getElementById('fontSizeDec'),
            themeToggle: document.getElementById('themeToggle'),
            shortcutsBtn: document.getElementById('shortcutsBtn'),
            shortcutsModal: document.getElementById('shortcutsModal'),
            closeShortcutsBtn: document.getElementById('closeShortcutsBtn'),
            sidebarMobileToggle: document.getElementById('sidebarMobileToggle'),
            sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
            sidebar: document.getElementById('sidebar'),
            currentLessonTitle: document.getElementById('currentLessonTitle'),
            lessonBadge: document.getElementById('lessonBadge'),
            progressText: document.getElementById('progressText'),
            progressBar: document.getElementById('progressBar'),
            lessonSearch: document.getElementById('lessonSearch'),
            clearSearchBtn: document.getElementById('clearSearchBtn'),
            workspaceBody: document.getElementById('workspaceBody'),
            editorPane: document.getElementById('editorPane'),
            theoryPane: document.getElementById('theoryPane'),
            theoryContent: document.getElementById('theoryContent'),
            executionTime: document.getElementById('executionTime'),
            statusBadge: document.getElementById('statusBadge'),
            loadingIndicator: document.getElementById('loadingIndicator')
        };

        setupHljsLanguages();
        renderLessons();
        initEditor();
        setupEventListeners();

        console.log('🚀 Script Tutor IDE Pro initialized');
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
