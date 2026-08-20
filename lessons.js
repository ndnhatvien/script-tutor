// Lessons Data
const LESSONS = {
    tcl: [
        {
            id: 'tcl-01',
            title: 'Bài 1: Hello World',
            description: 'Làm quen với TCL',
            code: `# ===== LÝ THUYẾT =====
# TCL (Tool Command Language): Ngôn ngữ script mạnh mẽ
# Phát triển bởi John Ousterhout, phổ biến trong EDA tools
# Cú pháp: lệnh tham_số1 tham_số2 ...
# Comment: Bắt đầu bằng # (phải ở đầu dòng hoặc sau dấu ;)
# puts: Lệnh in text ra màn hình

# ===== VÍ DỤ =====
# Lệnh puts cơ bản
puts "Hello, World!"
puts "Chào mừng đến với TCL"

# In nhiều dòng
puts "TCL Programming"
puts "EDA Scripting"
puts "VLSI Design Automation"

# In với escape sequence
puts "Dòng 1\\nDòng 2\\nDòng 3"

# puts -nonewline: Không xuống dòng
puts -nonewline "Hello, "
puts "World!"

# Grouping với {}
puts "This is a single line"
puts {This is also a single line}
puts {Multiple words
in curly braces
treated as one argument}

# ===== BÀI TẬP =====
# TODO: Tạo chương trình giới thiệu đầy đủ
# 1. In tiêu đề "=== GIỚI THIỆU BẢN THÂN ==="
# 2. In tên của bạn
# 3. In trường/khoa
# 4. In ngành học
# 5. In sở thích
# 6. In tiêu đề "=== KẾT THÚC ==="
# (Viết code bên dưới dòng này)

`,
            explanation: `
**1. TCL LÀ GÌ?**

TCL (Tool Command Language) là ngôn ngữ script:
- Được tạo bởi John Ousterhout năm 1988
- Dùng phổ biến trong EDA (Electronic Design Automation)
- Core của các công cụ: Cadence, Synopsys, Mentor Graphics
- Syntax đơn giản, dễ học, mạnh mẽ

**Use cases:**
- VLSI design automation
- Test automation
- Network configuration
- GUI development (Tk toolkit)
- Embedded scripting

**2. CÚ PHÁP TCL CƠ BẢN**

\`\`\`tcl
lệnh tham_số1 tham_số2 tham_số3 ...
\`\`\`

**Đặc điểm:**
- Mọi thứ đều là string
- Lệnh đầu tiên, sau đó là tham số cách nhau bởi space
- Không có từ khóa (keyword) như C/Java

**Ví dụ:**
\`\`\`tcl
puts "Hello"      # lệnh: puts, tham số: "Hello"
set x 10          # lệnh: set, tham số: x, 10
expr {5 + 3}      # lệnh: expr, tham số: {5 + 3}
\`\`\`

**3. COMMENT (#)**

\`\`\`tcl
# Comment ở đầu dòng
puts "Hello"  # Comment sau ;

# SAI: Comment giữa lệnh
puts "Hello" # SAI: Lỗi syntax
\`\`\`

**Quy tắc:**
- # phải ở đầu dòng
- Hoặc sau dấu ;
- Không được ở giữa lệnh

**4. LỆNH PUTS**

puts (put string) in text ra màn hình:

\`\`\`tcl
puts "text"              # In và xuống dòng
puts -nonewline "text"   # In không xuống dòng
\`\`\`

**Ví dụ:**
\`\`\`tcl
puts "Hello"
puts "World"
# Output:
# Hello
# World

puts -nonewline "Hello "
puts "World"
# Output:
# Hello World
\`\`\`

**5. GROUPING: "" VÀ {}**

**Dấu nháy kép "":** Variable substitution
\`\`\`tcl
set name "John"
puts "Hello, $name"    # Hello, John
\`\`\`

**Dấu ngoặc nhọn {}:** Raw string, không substitution
\`\`\`tcl
set name "John"
puts {Hello, $name}    # Hello, $name (không thay thế)
\`\`\`

**Khi nào dùng gì:**
- \`""\`: Khi cần thay thế biến (\`$var\`)
- \`{}\`: Khi cần raw string (biểu thức, regex)

**6. ESCAPE SEQUENCES**

\`\`\`tcl
\\n    # Xuống dòng
\\t    # Tab
\\\\    # Backslash
\\"    # Dấu nháy kép
\\$    # Dấu dollar (không thay thế biến)
\`\`\`

**Ví dụ:**
\`\`\`tcl
puts "Line1\\nLine2"       # Xuống dòng
puts "Col1\\tCol2"         # Tab
puts "Price: \\$10"        # Hiển thị $10
\`\`\`

**7. MULTIPLE LINES**

**Cách 1: Nhiều puts**
\`\`\`tcl
puts "Line 1"
puts "Line 2"
puts "Line 3"
\`\`\`

**Cách 2: \\n trong string**
\`\`\`tcl
puts "Line 1\\nLine 2\\nLine 3"
\`\`\`

**Cách 3: {} multiline**
\`\`\`tcl
puts {Line 1
Line 2
Line 3}
\`\`\`

**8. SO SÁNH VỚI BASH**

| TCL | Bash | Ý nghĩa |
|-----|------|---------|
| \`puts "text"\` | \`echo "text"\` | In text |
| \`# comment\` | \`# comment\` | Comment |
| \`set x 10\` | \`x=10\` | Gán biến |
| \`$x\` | \`$x\` | Lấy biến |
| \`{}\` | \`''\` | Raw string |

**9. PUTS VỚI FILE/CHANNEL**

\`\`\`tcl
# In ra stdout (default)
puts "Hello"

# In ra stderr
puts stderr "Error message"

# In ra file (sau khi mở)
set f [open "output.txt" w]
puts $f "Write to file"
close $f
\`\`\`

**10. TCL INTERPRETER**

TCL là interpreted language:
- Không cần compile
- Chạy từng dòng (line by line)
- Interactive mode: \`tclsh\`
- Script mode: \`tclsh script.tcl\`

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
puts "=== GIỚI THIỆU BẢN THÂN ==="
puts "Tên: Nguyễn Văn A"
puts "Trường: ĐH Bách Khoa Hà Nội"
puts "Khoa: Điện tử - Viễn thông"
puts "Ngành: Kỹ thuật Vi mạch"
puts "Sở thích: Thiết kế mạch số"
puts "=== KẾT THÚC ==="
\`\`\`

**MỞ RỘNG:**
- Thử puts -nonewline
- Thử escape sequences (\\n, \\t)
- Thử grouping với {} và ""
            `
        },
        {
            id: 'tcl-02',
            title: 'Bài 2: Biến (Variables)',
            description: 'Khai báo và sử dụng biến',
            code: `# ===== LÝ THUYẾT =====
# Biến: Lưu giá trị để tái sử dụng
# set: Gán giá trị cho biến
# $: Lấy giá trị biến
# []: Thực thi lệnh và trả về kết quả (command substitution)

# ===== VÍ DỤ =====
# Khai báo biến
set name "Nguyen Van A"
set age 25
set pi 3.14159
set school "HUST"

# Sử dụng biến
puts "Tên: $name"
puts "Tuổi: $age"
puts "Pi: $pi"

# Tính toán với biến
set nextYear [expr {$age + 1}]
puts "Năm sau: $nextYear tuổi"

# Nối chuỗi
set fullName "$name - Sinh viên $school"
puts $fullName

# set cũng trả về giá trị
set x [set y 100]
puts "x=$x, y=$y"

# Biến không cần khai báo kiểu
set a 10        # integer
set b 3.14      # float
set c "text"    # string

# ===== BÀI TẬP =====
# TODO:
# 1. Tạo biến lưu thông tin sách:
#    - title (tiêu đề)
#    - author (tác giả)
#    - year (năm xuất bản)
#    - price (giá)
# 2. Tính tuổi sách (2026 - year)
# 3. Tính giá sau giảm 20% (price * 0.8)
# 4. In thông tin đầy đủ

`,
            explanation: `
**1. LỆNH SET**

\`set tên giá_trị\` - Gán giá trị cho biến:
\`\`\`tcl
set x 10
set name "John"
set pi 3.14159
\`\`\`

**2. TRUY CẬP BIẾN: $**

\`\`\`tcl
set x 10
puts $x        # 10
puts "x=$x"    # x=10
\`\`\`

**3. COMMAND SUBSTITUTION: []**

\`[lệnh]\` thực thi lệnh và trả về kết quả:
\`\`\`tcl
set sum [expr {5 + 3}]      # sum = 8
set len [string length "hi"]  # len = 2
\`\`\`

**4. EXPR: TÍNH TOÁN**

\`expr {biểu_thức}\` - Tính toán số học:
\`\`\`tcl
set a 10
set b 3
set sum [expr {$a + $b}]     # 13
set prod [expr {$a * $b}]    # 30
set pow [expr {$a ** 2}]     # 100
\`\`\`

**Toán tử:** \`+, -, *, /, %, **\`

**5. NỐI CHUỖI**

\`\`\`tcl
set first "Hello"
set last "World"
set full "$first $last"      # Hello World
set concat [string cat $first $last]  # HelloWorld
\`\`\`

**6. SET TRẢ VỀ GIÁ TRỊ**

\`\`\`tcl
set x [set y 10]  # x=10, y=10
puts [set z 20]   # In 20 và gán z=20
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set title "TCL Programming"
set author "John Ousterhout"
set year 2010
set price 500000

set age [expr {2026 - $year}]
set sale_price [expr {$price * 0.8}]

puts "Sách: $title"
puts "Tác giả: $author"
puts "Tuổi sách: $age năm"
puts "Giá gốc: $price VND"
puts "Giá sau giảm: $sale_price VND"
\`\`\`
            `
        },
        {
            id: 'tcl-03',
            title: 'Bài 3: Phép tính (Expressions)',
            description: 'Các phép toán số học',
            code: `# ===== LÝ THUYẾT =====
# expr: Tính toán biểu thức
# Toán tử: +, -, *, /, %, **
# Luôn dùng {} để bảo vệ biểu thức

# ===== VÍ DỤ =====
set a 10
set b 3

# Phép toán cơ bản
puts "a + b = [expr {$a + $b}]"
puts "a - b = [expr {$a - $b}]"
puts "a * b = [expr {$a * $b}]"
puts "a / b = [expr {$a / $b}]"
puts "a % b = [expr {$a % $b}]"

# Lũy thừa
puts "a ^ 2 = [expr {$a ** 2}]"

# Ưu tiên thực hiện
set result [expr {2 + 3 * 4}]
puts "2 + 3 * 4 = $result"

set result [expr {(2 + 3) * 4}]
puts "(2 + 3) * 4 = $result"

# Chia số thực
set result [expr {10.0 / 3}]
puts "10.0 / 3 = $result"

# ===== BÀI TẬP =====
# TODO: Tính diện tích hình tròn
# 1. Khai báo bán kính r = 5
# 2. Khai báo pi = 3.14159
# 3. Tính diện tích = pi * r^2
# 4. Tính chu vi = 2 * pi * r
# 5. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**EXPR COMMAND**
- \`expr {biểu_thức}\`
- \`{}\` BẮT BUỘC để tránh lỗi
- Thực hiện tính toán

**TOÁN TỬ**
- \`+\` : cộng
- \`-\` : trừ
- \`*\` : nhân
- \`/\` : chia
- \`%\` : chia lấy dư
- \`**\` : lũy thừa

**ƯU TIÊN**
- \`*\`, \`/\` trước \`+\`, \`-\`
- \`()\` thay đổi ưu tiên
- \`expr {2 + 3 * 4}\` = 14
- \`expr {(2 + 3) * 4}\` = 20

**SỐ THỰC**
- Dùng \`.0\` để ép kiểu
- \`10 / 3\` = 3 (nguyên)
- \`10.0 / 3\` = 3.333... (thực)

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set r 5
set pi 3.14159
set area [expr {$pi * $r ** 2}]
set circumference [expr {2 * $pi * $r}]
puts "Diện tích: $area"
puts "Chu vi: $circumference"
\`\`\`
            `
        },

        {
            id: 'tcl-04',
            title: 'Bài 4: Điều kiện (if-else)',
            description: 'Cấu trúc rẽ nhánh',
            code: `# ===== LÝ THUYẾT =====
# if: Thực thi code khi điều kiện đúng
# elseif, else: Các trường hợp khác
# Toán tử so sánh: ==, !=, <, <=, >, >=

# ===== VÍ DỤ =====
set score 85

if {$score >= 90} {
    puts "Xuất sắc!"
} elseif {$score >= 80} {
    puts "Giỏi!"
} elseif {$score >= 70} {
    puts "Khá!"
} elseif {$score >= 60} {
    puts "Trung bình!"
} else {
    puts "Yếu!"
}

# Kiểm tra số chẵn/lẻ
set num 7
if {$num % 2 == 0} {
    puts "$num là số chẵn"
} else {
    puts "$num là số lẻ"
}

# ===== BÀI TẬP =====
# TODO: Kiểm tra năm nhuận
# 1. Khai báo biến year
# 2. Năm nhuận nếu:
#    - Chia hết cho 400, HOẶC
#    - Chia hết cho 4 NHƯNG không chia hết cho 100
# 3. In "Năm nhuận" hoặc "Không phải năm nhuận"
# (Viết code bên dưới)

`,
            explanation: `
**CẤU TRÚC IF**
\`\`\`tcl
if {điều_kiện} {
    # code khi đúng
} elseif {điều_kiện_2} {
    # code khi điều kiện 2 đúng
} else {
    # code khi tất cả sai
}
\`\`\`

**TOÁN TỬ SO SÁNH**
- \`==\` : bằng
- \`!=\` : khác
- \`<\` : nhỏ hơn
- \`<=\` : nhỏ hơn hoặc bằng
- \`>\` : lớn hơn
- \`>=\` : lớn hơn hoặc bằng

**TOÁN TỬ LOGIC**
- \`&&\` : và (AND)
- \`||\` : hoặc (OR)
- \`!\` : phủ định (NOT)

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set year 2024
if {$year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0)} {
    puts "Năm nhuận"
} else {
    puts "Không phải năm nhuận"
}
\`\`\`
            `
        },
        {
            id: 'tcl-05',
            title: 'Bài 5: Vòng lặp (for)',
            description: 'Lặp với số lần xác định',
            code: `# ===== LÝ THUYẾT =====
# for: Lặp với số lần xác định
# incr: Tăng giá trị biến

# ===== VÍ DỤ =====
# Vòng lặp cơ bản
puts "=== Đếm từ 1 đến 5 ==="
for {set i 1} {$i <= 5} {incr i} {
    puts "Số $i"
}

# Bảng cửu chương
puts ""
puts "=== Bảng cửu chương 7 ==="
for {set i 1} {$i <= 10} {incr i} {
    set result [expr {7 * $i}]
    puts "7 x $i = $result"
}

# Vòng lặp với bước nhảy 2
puts ""
puts "=== Số chẵn từ 2 đến 10 ==="
for {set i 2} {$i <= 10} {incr i 2} {
    puts $i
}

# ===== BÀI TẬP =====
# TODO: Tính giai thừa n!
# 1. Khai báo n = 5
# 2. Tính factorial = 1 * 2 * 3 * ... * n
# 3. Dùng vòng for
# 4. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**VÒNG LẶP FOR**
\`\`\`tcl
for {khởi_tạo} {điều_kiện} {bước_nhảy} {
    # code
}
\`\`\`

**INCR COMMAND**
- \`incr i\`: Tăng i lên 1
- \`incr i 2\`: Tăng i lên 2
- \`incr i -1\`: Giảm i đi 1

**CẤU TRÚC**
- \`{set i 1}\`: Khởi tạo
- \`{$i <= 10}\`: Điều kiện tiếp tục
- \`{incr i}\`: Sau mỗi lần lặp

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set n 5
set factorial 1
for {set i 1} {$i <= $n} {incr i} {
    set factorial [expr {$factorial * $i}]
}
puts "$n! = $factorial"
\`\`\`
            `
        },
        {
            id: 'tcl-06',
            title: 'Bài 6: Vòng lặp (while)',
            description: 'Lặp theo điều kiện',
            code: `# ===== LÝ THUYẾT =====
# while: Lặp khi điều kiện còn đúng
# Phải cẩn thận vòng lặp vô hạn

# ===== VÍ DỤ =====
# Đếm từ 1 đến 5
set count 1
puts "=== Đếm từ 1 đến 5 ==="
while {$count <= 5} {
    puts "Count: $count"
    incr count
}

# Tính tổng
puts ""
puts "=== Tính tổng 1+2+...+10 ==="
set sum 0
set n 1
while {$n <= 10} {
    set sum [expr {$sum + $n}]
    incr n
}
puts "Tổng: $sum"

# ===== BÀI TẬP =====
# TODO: Tìm số Fibonacci thứ n
# Dãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
# F(n) = F(n-1) + F(n-2)
# 1. Khai báo n = 10
# 2. Tính số Fibonacci thứ n
# 3. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**WHILE LOOP**
\`\`\`tcl
while {điều_kiện} {
    # code
    # Phải thay đổi điều kiện!
}
\`\`\`

**LƯU Ý**
- Điều kiện phải thay đổi
- Nếu không → vòng lặp vô hạn
- Dùng \`incr\` hoặc \`set\`

**BREAK & CONTINUE**
- \`break\`: Thoát khỏi vòng lặp
- \`continue\`: Bỏ qua iteration hiện tại

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set n 10
set a 0
set b 1
set count 2
while {$count < $n} {
    set temp [expr {$a + $b}]
    set a $b
    set b $temp
    incr count
}
puts "Fibonacci($n) = $b"
\`\`\`
            `
        },
        {
            id: 'tcl-07',
            title: 'Bài 7: Lists',
            description: 'Làm việc với danh sách',
            code: `# ===== LÝ THUYẾT =====
# List: Danh sách các giá trị
# llength, lindex, lappend, foreach

# ===== VÍ DỤ =====
# Tạo list
set fruits {apple banana orange grape}

# Độ dài list
puts "Số phần tử: [llength $fruits]"

# Truy cập phần tử
puts "Phần tử đầu: [lindex $fruits 0]"
puts "Phần tử thứ 2: [lindex $fruits 1]"
puts "Phần tử cuối: [lindex $fruits end]"

# Thêm phần tử
lappend fruits "mango" "pineapple"
puts "Sau khi thêm: $fruits"

# Duyệt list
puts ""
puts "=== Duyệt list ==="
foreach fruit $fruits {
    puts "- $fruit"
}

# Duyệt với index
puts ""
puts "=== Với index ==="
set i 0
foreach fruit $fruits {
    puts "Index $i: $fruit"
    incr i
}

# ===== BÀI TẬP =====
# TODO: Tính tổng và trung bình điểm
# 1. Tạo list scores {8.5 9.0 7.5 8.0 9.5}
# 2. Tính tổng điểm
# 3. Tính điểm trung bình
# 4. Đếm số điểm >= 8.0
# 5. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**LỆNH LIST**
- \`llength $list\`: Số phần tử
- \`lindex $list index\`: Lấy phần tử
- \`lappend list item\`: Thêm phần tử
- \`linsert $list index item\`: Chèn
- \`lreplace $list start end\`: Thay thế

**INDEX**
- \`0\`: Phần tử đầu
- \`end\`: Phần tử cuối
- \`end-1\`: Phần tử kế cuối

**FOREACH**
\`\`\`tcl
foreach item $list {
    puts $item
}
\`\`\`
- Duyệt qua từng phần tử trong danh sách

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
set scores {8.5 9.0 7.5 8.0 9.5}
set sum 0
set count 0
foreach score $scores {
    set sum [expr {$sum + $score}]
    if {$score >= 8.0} {
        incr count
    }
}
set avg [expr {$sum / [llength $scores]}]
puts "Tổng: $sum"
puts "TB: $avg"
puts "Số điểm >= 8.0: $count"
\`\`\`
            `
        },
        {
            id: 'tcl-08',
            title: 'Bài 8: Procedures (Functions)',
            description: 'Tạo hàm trong TCL',
            code: `# ===== LÝ THUYẾT =====
# proc: Định nghĩa procedure (hàm)
# Tham số: tên trong {}
# return: Trả về giá trị

# ===== VÍ DỤ =====
# Procedure cơ bản
proc greet {name} {
    puts "Xin chào, $name!"
}

greet "An"
greet "Bình"

# Procedure với return
proc add {a b} {
    return [expr {$a + $b}]
}

set result [add 10 20]
puts "10 + 20 = $result"

# Procedure tính giai thừa (đệ quy)
proc factorial {n} {
    if {$n <= 1} {
        return 1
    } else {
        set prev [factorial [expr {$n - 1}]]
        return [expr {$n * $prev}]
    }
}

puts "5! = [factorial 5]"

# Procedure nhiều tham số
proc calculate_rectangle {length width} {
    set area [expr {$length * $width}]
    set perimeter [expr {2 * ($length + $width)}]

    puts "Diện tích: $area"
    puts "Chu vi: $perimeter"
}

puts ""
puts "=== Hình chữ nhật 10x5 ==="
calculate_rectangle 10 5

# ===== BÀI TẬP =====
# TODO: Tạo procedure kiểm tra số nguyên tố
# 1. proc is_prime {n}
# 2. Kiểm tra n có phải số nguyên tố không
# 3. return 1 nếu là nguyên tố, 0 nếu không
# 4. Test với: 7, 10, 13, 20
# (Viết code bên dưới)

`,
            explanation: `
**ĐỊNH NGHĨA PROCEDURE**
\`\`\`tcl
proc tên {tham_số1 tham_số2} {
    # code thực thi
    return giá_trị
}
\`\`\`

**THAM SỐ**
- Liệt kê trong \`{}\`
- Ngăn cách bằng khoảng trắng
- Ví dụ: \`proc add {a b} {...}\`

**RETURN**
- \`return giá_trị\`: Trả về kết quả ngay lập tức
- Nếu không có \`return\` → trả về kết quả của lệnh cuối cùng

**GỌI PROCEDURE**
- \`tên tham_số1 tham_số2\`
- \`set result [tên args]\`

**ĐỆ QUY**
- Procedure gọi chính nó
- Phải có điều kiện dừng

**GỢI Ý BÀI TẬP:**
\`\`\`tcl
proc is_prime {n} {
    if {$n <= 1} {
        return 0
    }
    for {set i 2} {$i < $n} {incr i} {
        if {$n % $i == 0} {
            return 0
        }
    }
    return 1
}

puts "7: [is_prime 7]"
puts "10: [is_prime 10]"
puts "13: [is_prime 13]"
puts "20: [is_prime 20]"
\`\`\`
            `
        }
    ],
    bash: [
        {
            id: 'bash-01',
            title: 'Bài 1: Hello World',
            description: 'Câu lệnh đầu tiên - echo',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Shebang (#!/bin/bash): Dòng đầu tiên, chỉ định shell thực thi
# Comment (#): Ghi chú, shell bỏ qua
# echo: Lệnh in text ra màn hình

# ===== VÍ DỤ =====
echo "Hello, World!"
echo "Chào mừng đến với Bash!"

# In dòng trống
echo ""

# In nhiều dòng
echo "Dòng 1"
echo "Dòng 2"
echo "Dòng 3"

# ===== BÀI TẬP =====
# TODO: In ra màn hình thông tin sau:
# - Tên của bạn
# - Tuổi của bạn
# - Sở thích của bạn
# (Viết code bên dưới dòng này)

`,
            explanation: `
**1. SHEBANG (#!/bin/bash)**
Dòng đầu tiên chỉ định trình thông dịch shell thực thi script:
\`\`\`bash
#!/bin/bash
\`\`\`

**2. GHI CHÚ TRONG BASH (#)**
Shell sẽ bỏ qua các dòng bắt đầu bằng dấu \`#\`:
\`\`\`bash
# Đây là ghi chú đầu dòng
echo "Hello, World!"  # Ghi chú sau câu lệnh
\`\`\`

**3. LỆNH IN RA MÀN HÌNH (ECHO)**
\`\`\`bash
echo "Hello, World!"           # In và tự động xuống dòng
echo -n "Không xuống dòng: "   # Tham số -n
echo "Dòng tiếp tục"
echo -e "Dòng 1\nDòng 2\tTab"   # Tham số -e cho escape sequence
\`\`\`

**4. GỢI Ý BÀI TẬP:**
\`\`\`bash
echo "Tên: Nguyễn Văn A"
echo "Tuổi: 20"
echo "Sở thích: Lập trình"
\`\`\`
            `
        },
        {
            id: 'bash-02',
            title: 'Bài 2: Biến (Variables)',
            description: 'Khai báo và sử dụng biến',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Biến: Lưu trữ giá trị để sử dụng lại
# Khai báo: tên=giá_trị (KHÔNG có khoảng trắng)
# Sử dụng: $tên hoặc \${tên}

# ===== VÍ DỤ =====
# Khai báo biến
name="Nguyen Van A"
age=25
city="Ha Noi"

# Sử dụng biến
echo "Tên: $name"
echo "Tuổi: $age"
echo "Thành phố: $city"

# Nối biến với text
echo "Xin chào, tôi là \${name}!"
echo "Năm nay tôi \${age} tuổi"

# ===== BÀI TẬP =====
# TODO: Tạo chương trình quản lý sản phẩm
# 1. Khai báo biến: product (tên sản phẩm)
# 2. Khai báo biến: price (giá)
# 3. Khai báo biến: quantity (số lượng)
# 4. In thông tin sản phẩm ra màn hình
# (Viết code bên dưới)

`,
            explanation: `
**1. KHAI BÁO BIẾN**
Cú pháp: \`tên=giá_trị\` *(Lưu ý: KHÔNG có khoảng trắng quanh dấu \`=\`)*:
\`\`\`bash
name="Nguyen Van A"
age=25
city="Ha Noi"
\`\`\`

**2. SỬ DỤNG BIẾN**
\`\`\`bash
echo "Tên: $name"
echo "Tuổi: \${age}"
echo "User: \${name}_admin"   # Dấu {} giúp phân tách tên biến rõ ràng
\`\`\`

**3. QUY TẮC ĐẶT TÊN BIẾN**
- Chữ cái, số, gạch dưới (\`_\`)
- Không bắt đầu bằng số
- Phân biệt chữ HOA / chữ thường (\`Name\` khác \`name\`)

**4. GỢI Ý BÀI TẬP:**
\`\`\`bash
product="Laptop"
price=15000000
quantity=2
echo "Sản phẩm: $product"
echo "Giá: $price VNĐ"
echo "Số lượng: $quantity"
\`\`\`
            `
        },
        {
            id: 'bash-03',
            title: 'Bài 3: Phép tính',
            description: 'Các phép toán số học',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Phép toán số nguyên: $((biểu_thức))
# Phép toán số thực: dùng bc (calculator)

# ===== VÍ DỤ =====
a=10
b=3

# Phép toán cơ bản
echo "a + b = $((a + b))"
echo "a - b = $((a - b))"
echo "a * b = $((a * b))"
echo "a / b = $((a / b))"
echo "a % b = $((a % b))"

# Lũy thừa
echo "a ^ 2 = $((a ** 2))"

# Ưu tiên thực hiện
result=$((2 + 3 * 4))
echo "2 + 3 * 4 = $result"

result=$(((2 + 3) * 4))
echo "(2 + 3) * 4 = $result"

# ===== BÀI TẬP =====
# TODO: Tính diện tích và chu vi hình chữ nhật
# 1. Khai báo chiều dài = 12
# 2. Khai báo chiều rộng = 5
# 3. Tính diện tích = dài * rộng
# 4. Tính chu vi = 2 * (dài + rộng)
# 5. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**PHÉP TOÁN SỐ NGUYÊN: \$((...))**
- \`+\` : cộng
- \`-\` : trừ
- \`*\` : nhân
- \`/\` : chia nguyên (bỏ phần dư)
- \`%\` : chia lấy dư
- \`**\` : lũy thừa

**ƯU TIÊN THỰC HIỆN**
- Giống toán học: \`*\`, \`/\` trước \`+\`, \`-\`
- Dùng \`()\` để thay đổi mức độ ưu tiên
- \`$((2 + 3 * 4))\` = 14
- \`$(((2 + 3) * 4))\` = 20

**PHÉP TOÁN SỐ THỰC**
- Dùng \`bc\` (basic calculator)
- \`scale=N\`: N chữ số thập phân
- Ví dụ: \`echo "scale=2; 10/3" | bc\` → 3.33

**GỢI Ý BÀI TẬP:**
\`\`\`bash
length=12
width=5
area=$((length * width))
perimeter=$((2 * (length + width)))
echo "Diện tích: $area"
echo "Chu vi: $perimeter"
\`\`\`
            `
        },
        {
            id: 'bash-04',
            title: 'Bài 4: Điều kiện (if)',
            description: 'Cấu trúc rẽ nhánh',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Cấu trúc if: Thực thi code khi điều kiện đúng
# Toán tử so sánh: -eq, -ne, -gt, -ge, -lt, -le

# ===== VÍ DỤ =====
score=85

if [ $score -ge 90 ]; then
    echo "Xuất sắc!"
elif [ $score -ge 80 ]; then
    echo "Giỏi!"
elif [ $score -ge 70 ]; then
    echo "Khá!"
elif [ $score -ge 60 ]; then
    echo "Trung bình!"
else
    echo "Yếu!"
fi

# Ví dụ 2: Kiểm tra số chẵn/lẻ
num=7
if [ $((num % 2)) -eq 0 ]; then
    echo "$num là số chẵn"
else
    echo "$num là số lẻ"
fi

# ===== BÀI TẬP =====
# TODO: Viết chương trình kiểm tra tuổi
# 1. Khai báo biến age (tuổi)
# 2. Nếu age < 13: In "Thiếu nhi"
# 3. Nếu 13 <= age < 18: In "Thiếu niên"
# 4. Nếu 18 <= age < 60: In "Người lớn"
# 5. Nếu age >= 60: In "Người cao tuổi"
# (Viết code bên dưới)

`,
            explanation: `
**CẤU TRÚC IF**
\`\`\`bash
if [ điều_kiện ]; then
    # code khi đúng
elif [ điều_kiện_2 ]; then
    # code khi điều kiện 2 đúng
else
    # code khi tất cả đều sai
fi
\`\`\`

**TOÁN TỬ SO SÁNH SỐ HỌC**
- \`-eq\` : bằng (equal)
- \`-ne\` : khác (not equal)
- \`-gt\` : lớn hơn (greater than)
- \`-ge\` : lớn hơn hoặc bằng
- \`-lt\` : nhỏ hơn (less than)
- \`-le\` : nhỏ hơn hoặc bằng

**LƯU Ý QUAN TRỌNG**
- Bắt buộc có khoảng trắng sau \`[\` và trước \`]\`
- Đúng: \`[ $a -eq 5 ]\`
- Sai: \`[$a -eq 5]\`
- \`then\` phải nằm ở dòng riêng HOẶC sau dấu \`;\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
age=25
if [ $age -lt 13 ]; then
    echo "Thiếu nhi"
elif [ $age -lt 18 ]; then
    echo "Thiếu niên"
elif [ $age -lt 60 ]; then
    echo "Người lớn"
else
    echo "Người cao tuổi"
fi
\`\`\`
            `
        },
        {
            id: 'bash-05',
            title: 'Bài 5: Vòng lặp (for)',
            description: 'Lặp với for loop',
            type: 'for',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Vòng lặp for: Lặp qua danh sách hoặc range
# 3 cách: list, range {}, C-style

# ===== VÍ DỤ =====
# Cách 1: Lặp qua danh sách
echo "=== Danh sách ==="
for fruit in apple banana orange; do
    echo "- $fruit"
done

# Cách 2: Lặp với range
echo ""
echo "=== Đếm từ 1 đến 5 ==="
for i in {1..5}; do
    echo "Số $i"
done

# Cách 3: C-style for
echo ""
echo "=== Bảng cửu chương 7 ==="
for ((i=1; i<=10; i++)); do
    result=$((7 * i))
    echo "7 x $i = $result"
done

# ===== BÀI TẬP =====
# TODO: Tính tổng từ 1 đến 10
# 1. Khai báo biến sum=0
# 2. Dùng for loop từ 1 đến 10
# 3. Cộng dồn vào sum
# 4. In tổng ra màn hình
# (Viết code bên dưới)

`,
            explanation: `
**FOR LOOP - 3 CÁCH**

**1. Lặp qua danh sách:**
\`\`\`bash
for item in item1 item2 item3; do
    echo "$item"
done
\`\`\`

**2. Lặp với range {start..end}:**
\`\`\`bash
for i in {1..10}; do
    echo "$i"
done
\`\`\`
- \`{1..10}\`: từ 1 đến 10
- \`{1..10..2}\`: từ 1 đến 10, bước nhảy 2

**3. C-style for:**
\`\`\`bash
for ((i=0; i<10; i++)); do
    echo "$i"
done
\`\`\`
- Khởi tạo; điều kiện lặp; bước nhảy
- \`i++\` tăng biến \`i\` lên 1

**GỢI Ý BÀI TẬP:**
\`\`\`bash
sum=0
for i in {1..10}; do
    sum=$((sum + i))
done
echo "Tổng: $sum"
\`\`\`
            `
        },
        {
            id: 'bash-06',
            title: 'Bài 6: Vòng lặp (while)',
            description: 'Lặp theo điều kiện',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# While loop: Lặp khi điều kiện còn đúng
# Cẩn thận vòng lặp vô hạn!

# ===== VÍ DỤ =====
# Ví dụ 1: Đếm từ 1 đến 5
count=1
echo "=== Đếm từ 1 đến 5 ==="
while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

# Ví dụ 2: Tính tổng
echo ""
echo "=== Tính tổng 1+2+...+10 ==="
sum=0
n=1
while [ $n -le 10 ]; do
    sum=$((sum + n))
    n=$((n + 1))
done
echo "Tổng: $sum"

# ===== BÀI TẬP =====
# TODO: Tìm số nhỏ nhất > 100 chia hết cho 7
# 1. Khai báo biến num=1
# 2. Dùng while loop
# 3. Tăng num lên từng đơn vị
# 4. Kiểm tra num > 100 và num % 7 == 0
# 5. Khi tìm thấy, in ra và thoát
# (Viết code bên dưới)

`,
            explanation: `
**WHILE LOOP**
\`\`\`bash
while [ điều_kiện ]; do
    # code thực thi
    # Phải có lệnh cập nhật biến điều kiện!
done
\`\`\`

**LƯU Ý QUAN TRỌNG**
- Bắt buộc phải có lệnh cập nhật biến kiểm tra trong thân vòng lặp
- Nếu không → rơi vào vòng lặp vô tận (infinite loop)
- Ví dụ: \`count=$((count + 1))\`

**SO SÁNH FOR vs WHILE**
- \`FOR\`: Sử dụng khi biết trước số lần lặp hoặc duyệt danh sách
- \`WHILE\`: Lặp đến khi biểu thức điều kiện trở thành sai (false)

**BREAK & CONTINUE**
- \`break\`: Thoát hoàn toàn khỏi vòng lặp
- \`continue\`: Bỏ qua các dòng sau và nhảy sang lần lặp tiếp theo

**GỢI Ý BÀI TẬP:**
\`\`\`bash
num=101
while [ $num -le 200 ]; do
    if [ $((num % 7)) -eq 0 ]; then
        echo "Số cần tìm: $num"
        break
    fi
    num=$((num + 1))
done
\`\`\`
            `
        },
        {
            id: 'bash-07',
            title: 'Bài 7: Arrays',
            description: 'Làm việc với mảng',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Array: Lưu nhiều giá trị trong 1 biến
# Index bắt đầu từ 0

# ===== VÍ DỤ =====
# Tạo array
fruits=("apple" "banana" "orange" "grape")

# Độ dài array
echo "Số phần tử: \${#fruits[@]}"

# Truy cập phần tử
echo "Phần tử đầu: \${fruits[0]}"
echo "Phần tử thứ 2: \${fruits[1]}"
echo "Phần tử cuối: \${fruits[-1]}"

# Thêm phần tử
fruits+=("mango")
echo "Sau khi thêm: \${fruits[@]}"

# Duyệt array
echo ""
echo "=== Duyệt array ==="
for fruit in "\${fruits[@]}"; do
    echo "- $fruit"
done

# Duyệt với index
echo ""
echo "=== Duyệt với index ==="
for i in "\${!fruits[@]}"; do
    echo "Index $i: \${fruits[i]}"
done

# ===== BÀI TẬP =====
# TODO: Quản lý danh sách điểm số
# 1. Tạo array scores=(85 92 78 95 88)
# 2. Tính tổng điểm
# 3. Tính điểm trung bình
# 4. Tìm điểm cao nhất
# 5. In kết quả
# (Viết code bên dưới)

`,
            explanation: `
**KHAI BÁO ARRAY**
\`\`\`bash
arr=(item1 item2 item3)
arr=("apple" "banana" "orange")
\`\`\`

**TRUY CẬP PHẦN TỬ**
- \`\${arr[0]}\`: phần tử đầu tiên (index 0)
- \`\${arr[1]}\`: phần tử thứ hai
- \`\${arr[-1]}\`: phần tử cuối cùng
- \`\${arr[@]}\`: toàn bộ phần tử trong mảng
- \`\${#arr[@]}\`: tổng số phần tử (độ dài mảng)

**THAO TÁC ARRAY**
- \`arr+=(item)\`: thêm phần tử vào cuối mảng
- \`unset arr[index]\`: xóa phần tử tại index
- \`arr[index]=value\`: gán/sửa phần tử

**DUYỆT ARRAY**
\`\`\`bash
for item in "\${arr[@]}"; do
    echo "$item"
done
\`\`\`

**DUYỆT VỚI INDEX**
\`\`\`bash
for i in "\${!arr[@]}"; do
    echo "\${arr[i]}"
done
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
scores=(85 92 78 95 88)
sum=0
max=0
for score in "\${scores[@]}"; do
    sum=$((sum + score))
    if [ $score -gt $max ]; then
        max=$score
    fi
done
avg=$((sum / \${#scores[@]}))
echo "Tổng điểm: $sum"
echo "Điểm trung bình: $avg"
echo "Điểm cao nhất: $max"
\`\`\`
            `
        },
        {
            id: 'bash-08',
            title: 'Bài 8: Functions',
            description: 'Tạo và gọi hàm',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Function: Nhóm code thành khối có thể tái sử dụng
# Tham số: $1, $2, $3, ...

# ===== VÍ DỤ =====
# Function cơ bản
greet() {
    echo "Xin chào, $1!"
}

# Gọi function
greet "An"
greet "Bình"

# Function với return
add() {
    result=$(($1 + $2))
    echo $result
}

sum=$(add 10 20)
echo "10 + 20 = $sum"

# Function phức tạp
calculate_area() {
    length=$1
    width=$2
    area=$((length * width))
    perimeter=$((2 * (length + width)))

    echo "Diện tích: $area"
    echo "Chu vi: $perimeter"
}

echo ""
echo "=== Hình chữ nhật 10x5 ==="
calculate_area 10 5

# ===== BÀI TẬP =====
# TODO: Tạo function kiểm tra số nguyên tố
# 1. Tạo function is_prime với tham số $1
# 2. Kiểm tra $1 có phải số nguyên tố không
# 3. In "Số nguyên tố" hoặc "Không phải số nguyên tố"
# 4. Test với các số: 7, 10, 13
# (Viết code bên dưới)

`,
            explanation: `
**ĐỊNH NGHĨA FUNCTION**
\`\`\`bash
function_name() {
    # code thực thi
}
\`\`\`

Hoặc:
\`\`\`bash
function function_name {
    # code thực thi
}
\`\`\`

**THAM SỐ TRUYỀN VÀO**
- \`$1, $2, $3\`: tham số thứ 1, 2, 3
- \`$@\`: danh sách tất cả tham số
- \`$#\`: tổng số lượng tham số

**GỌI FUNCTION**
\`\`\`bash
function_name arg1 arg2 arg3
\`\`\`

**RETURN VALUE**
- Sử dụng \`echo\` để trả về kết quả
- Nhận kết quả: \`result=$(function_name args)\`

**BIẾN CỤC BỘ (LOCAL)**
\`\`\`bash
my_func() {
    local var="local value"
    echo "$var"
}
\`\`\`
- \`local\`: khai báo biến chỉ tồn tại trong phạm vi hàm

**GỢI Ý BÀI TẬP:**
\`\`\`bash
is_prime() {
    num=$1
    if [ $num -le 1 ]; then
        echo "Không phải số nguyên tố"
        return
    fi

    for ((i=2; i<num; i++)); do
        if [ $((num % i)) -eq 0 ]; then
            echo "Không phải số nguyên tố"
            return
        fi
    done
    echo "Số nguyên tố"
}

is_prime 7
is_prime 10
is_prime 13
\`\`\`
            `
        }
    ]
};

// Export
window.LESSONS = LESSONS;

