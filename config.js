// Configuration
const CONFIG = {
    // API URL - Backend deployment options:

    // Option 1: Railway.app (Recommended - $5 credit/month)
    API_URL: 'https://script-tutor-production.up.railway.app/api',

    // Option 2: Render.com (Free - sleeps after 15min)
    // API_URL: 'https://tcl-bash-tutor-api.onrender.com/api',

    // Option 3: Fly.io (Free - 3 VMs)
    // API_URL: 'https://tcl-bash-tutor-api.fly.dev/api',

    // Option 4: Local development
    // API_URL: 'http://localhost:7860/api',

    // See DEPLOYMENT_ALTERNATIVES.md for more options

    // Default timeout (seconds)
    DEFAULT_TIMEOUT: 5,

    // Editor settings
    EDITOR: {
        theme: 'vs-dark',
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: 'on'
    }
};

// Export for use in other scripts
window.CONFIG = CONFIG;
