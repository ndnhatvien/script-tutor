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
- expr {biểu_thức}
- {} BẮT BUỘC để tránh lỗi
- Thực hiện tính toán

**TOÁN TỬ**
- + : cộng
- - : trừ
- * : nhân
- / : chia
- % : chia lấy dư
- ** : lũy thừa

**ƯU TIÊN**
- *, / trước +, -
- () thay đổi ưu tiên
- expr {2 + 3 * 4} = 14
- expr {(2 + 3) * 4} = 20

**SỐ THỰC**
- Dùng .0 để ép kiểu
- 10 / 3 = 3 (nguyên)
- 10.0 / 3 = 3.333... (thực)

**GỢI Ý BÀI TẬP:**
set r 5
set pi 3.14159
set area [expr {$pi * $r ** 2}]
set circumference [expr {2 * $pi * $r}]
puts "Diện tích: $area"
puts "Chu vi: $circumference"
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
if {điều_kiện} {
    # code
} elseif {điều_kiện_2} {
    # code
} else {
    # code
}

**TOÁN TỬ SO SÁNH**
- == : bằng
- != : khác
- < : nhỏ hơn
- <= : nhỏ hơn hoặc bằng
- > : lớn hơn
- >= : lớn hơn hoặc bằng

**TOÁN TỬ LOGIC**
- && : và (AND)
- || : hoặc (OR)
- ! : phủ định (NOT)

**GỢI Ý BÀI TẬP:**
set year 2024
if {$year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0)} {
    puts "Năm nhuận"
} else {
    puts "Không phải năm nhuận"
}
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
for {khởi_tạo} {điều_kiện} {bước_nhảy} {
    # code
}

**INCR COMMAND**
- incr i: Tăng i lên 1
- incr i 2: Tăng i lên 2
- incr i -1: Giảm i đi 1

**CẤU TRÚC**
- {set i 1}: Khởi tạo
- {$i <= 10}: Điều kiện tiếp tục
- {incr i}: Sau mỗi lần lặp

**GỢI Ý BÀI TẬP:**
set n 5
set factorial 1
for {set i 1} {$i <= $n} {incr i} {
    set factorial [expr {$factorial * $i}]
}
puts "$n! = $factorial"
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
while {điều_kiện} {
    # code
    # Phải thay đổi điều kiện!
}

**LƯU Ý**
- Điều kiện phải thay đổi
- Nếu không → vòng lặp vô hạn
- Dùng incr hoặc set

**BREAK & CONTINUE**
- break: Thoát khỏi vòng lặp
- continue: Bỏ qua iteration hiện tại

**GỢI Ý BÀI TẬP:**
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
- llength $list: Số phần tử
- lindex $list index: Lấy phần tử
- lappend list item: Thêm phần tử
- linsert $list index item: Chèn
- lreplace $list start end: Thay thế

**INDEX**
- 0: Phần tử đầu
- end: Phần tử cuối
- end-1: Phần tử kế cuối

**FOREACH**
foreach item $list {
    puts $item
}
- Duyệt qua từng phần tử

**GỢI Ý BÀI TẬP:**
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
proc tên {tham_số1 tham_số2} {
    # code
    return giá_trị
}

**THAM SỐ**
- Liệt kê trong {}
- Ngăn cách bằng khoảng trắng
- proc add {a b} {...}

**RETURN**
- return giá_trị
- Trả về ngay lập tức
- Nếu không return → trả về kết quả lệnh cuối

**GỌI PROCEDURE**
- tên tham_số1 tham_số2
- set result [tên args]

**ĐỆ QUY**
- Procedure gọi chính nó
- Phải có điều kiện dừng

**GỢI Ý BÀI TẬP:**
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
**SHEBANG (#!/bin/bash)**
- Dòng đầu tiên của script
- Chỉ định shell sẽ thực thi
- Bắt buộc khi chạy file .sh

**COMMENT (#)**
- Ghi chú, giải thích code
- Shell bỏ qua các dòng bắt đầu bằng #
- Giúp code dễ hiểu hơn

**LỆNH ECHO**
- Cú pháp: echo "text"
- In text ra màn hình (stdout)
- Tự động xuống dòng sau mỗi lệnh
- echo "" tạo dòng trống

**GỢI Ý BÀI TẬP:**
echo "Tên: Nguyễn Văn A"
echo "Tuổi: 20"
echo "Sở thích: Lập trình"
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
**KHAI BÁO BIẾN**
- Cú pháp: tên=giá_trị
- KHÔNG có khoảng trắng quanh dấu =
- Đúng: name="An"
- Sai: name = "An"

**SỬ DỤNG BIẾN**
- $tên_biến: dạng ngắn
- \${tên_biến}: dạng đầy đủ (tốt hơn)
- \${} giúp tách biến khỏi text

**QUY TẮC ĐặT TÊN**
- Chữ cái, số, gạch dưới (_)
- KHÔNG bắt đầu bằng số
- Phân biệt HOA/thường
- Nên dùng tên có nghĩa

**GỢI Ý BÀI TẬP:**
product="Laptop"
price=15000000
quantity=2
echo "Sản phẩm: $product"
echo "Giá: $price VNĐ"
echo "Số lượng: $quantity"
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
- + : cộng
- - : trừ
- * : nhân
- / : chia nguyên (bỏ phần dư)
- % : chia lấy dư
- ** : lũy thừa

**ƯU TIÊN THỰC HIỆN**
- Giống toán học: *, / trước +, -
- Dùng () để thay đổi ưu tiên
- \$((2 + 3 * 4)) = 14
- \$(((2 + 3) * 4)) = 20

**PHÉP TOÁN SỐ THỰC**
- Dùng bc (basic calculator)
- scale=N: N chữ số thập phân
- echo "scale=2; 10/3" | bc
- Kết quả: 3.33

**GỢI Ý BÀI TẬP:**
length=12
width=5
area=\$((length * width))
perimeter=\$((2 * (length + width)))
echo "Diện tích: $area"
echo "Chu vi: $perimeter"
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
if [ điều_kiện ]; then
    # code khi đúng
elif [ điều_kiện_2 ]; then
    # code khi điều kiện 2 đúng
else
    # code khi tất cả sai
fi

**TOÁN TỬ SO SÁNH**
- -eq : bằng (equal)
- -ne : khác (not equal)
- -gt : lớn hơn (greater than)
- -ge : lớn hơn hoặc bằng
- -lt : nhỏ hơn (less than)
- -le : nhỏ hơn hoặc bằng

**LƯU Ý**
- Có khoảng trắng sau [ và trước ]
- Đúng: [ $a -eq 5 ]
- Sai: [$a -eq 5]
- then phải ở dòng riêng HOẶC sau ;

**GỢI Ý BÀI TẬP:**
age=25
if [ $age -lt 13 ]; then
    echo "Thiếu nhi"
elif [ $age -lt 18 ]; then
    echo "Thiếu niên"
...
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

**1. Lặp qua danh sách**
for item in item1 item2 item3; do
    echo "$item"
done

**2. Lặp với range {start..end}**
for i in {1..10}; do
    echo "$i"
done
- {1..10}: từ 1 đến 10
- {1..10..2}: từ 1 đến 10, bước nhảy 2

**3. C-style for**
for ((i=0; i<10; i++)); do
    echo "$i"
done
- Khởi tạo; điều kiện; bước nhảy
- i++ tăng i lên 1

**GỢI Ý BÀI TẬP:**
sum=0
for i in {1..10}; do
    sum=\$((sum + i))
done
echo "Tổng: $sum"
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
while [ điều_kiện ]; do
    # code
    # Phải có lệnh thay đổi điều kiện!
done

**LƯU Ý QUAN TRỌNG**
- Phải có lệnh thay đổi biến kiểm tra
- Nếu không → vòng lặp vô hạn
- Ví dụ: count=\$((count + 1))

**SO SÁNH FOR vs WHILE**
- FOR: Biết trước số lần lặp
- WHILE: Lặp đến khi điều kiện sai
- WHILE linh hoạt hơn FOR

**BREAK & CONTINUE**
- break: Thoát khỏi vòng lặp
- continue: Bỏ qua iteration hiện tại

**GỢI Ý BÀI TẬP:**
num=101
while [ $num -le 200 ]; do
    if [ \$((num % 7)) -eq 0 ]; then
        echo "Số cần tìm: $num"
        break
    fi
    num=\$((num + 1))
done
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
arr=(item1 item2 item3)
arr=("apple" "banana" "orange")

**TRUY CẬP PHẦN TỬ**
- \${arr[0]}: phần tử đầu tiên
- \${arr[1]}: phần tử thứ hai
- \${arr[-1]}: phần tử cuối
- \${arr[@]}: tất cả phần tử
- \${#arr[@]}: số phần tử

**THAO TÁC ARRAY**
- arr+=(item): thêm phần tử cuối
- unset arr[index]: xóa phần tử
- arr[index]=value: sửa phần tử

**DUYỆT ARRAY**
for item in "\${arr[@]}"; do
    echo "$item"
done

**DUYỆT VỚI INDEX**
for i in "\${!arr[@]}"; do
    echo "\${arr[i]}"
done

**GỢI Ý BÀI TẬP:**
scores=(85 92 78 95 88)
sum=0
max=0
for score in "\${scores[@]}"; do
    sum=\$((sum + score))
    if [ $score -gt $max ]; then
        max=$score
    fi
done
avg=\$((sum / \${#scores[@]}))
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
function_name() {
    # code
}

Hoặc:
function function_name {
    # code
}

**THAM SỐ**
- $1, $2, $3: tham số thứ 1, 2, 3
- $@: tất cả tham số
- $#: số lượng tham số

**GỌI FUNCTION**
function_name arg1 arg2 arg3

**RETURN VALUE**
- Dùng echo để "return"
- result=\$(function_name args)
- Hoặc dùng biến global

**BIẾN LOCAL**
my_func() {
    local var="local value"
    echo "$var"
}
- local: biến chỉ tồn tại trong function

**GỢI Ý BÀI TẬP:**
is_prime() {
    num=$1
    if [ $num -le 1 ]; then
        echo "Không phải số nguyên tố"
        return
    fi

    for ((i=2; i<num; i++)); do
        if [ \$((num % i)) -eq 0 ]; then
            echo "Không phải số nguyên tố"
            return
        fi
    done
    echo "Số nguyên tố"
}

is_prime 7
is_prime 10
is_prime 13
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

Shebang là dòng đầu tiên trong shell script:
- Cú pháp: #!/đường/dẫn/shell
- #!/bin/bash: Sử dụng Bash shell
- #!/bin/sh: Sử dụng sh shell
- Bắt buộc khi chạy file .sh trực tiếp: ./script.sh
- Không bắt buộc khi chạy: bash script.sh

**Tại sao cần Shebang?**
Khi bạn chạy ./script.sh, hệ điều hành cần biết dùng chương trình nào để thực thi file. Shebang chỉ định shell cụ thể.

**2. COMMENT (#)**

Comment dùng để ghi chú, giải thích code:
- Bắt đầu bằng #
- Shell bỏ qua toàn bộ dòng sau #
- Nên viết comment để:
  + Giải thích logic phức tạp
  + Ghi chú TODO
  + Mô tả mục đích function

Ví dụ:
\`\`\`bash
# Đây là comment một dòng
echo "Hello" # Comment cuối dòng
\`\`\`

**3. LỆNH ECHO**

echo là lệnh cơ bản nhất để in output:
- Cú pháp: echo "text"
- Tự động xuống dòng sau mỗi lệnh
- echo "" tạo dòng trống
- Dấu nháy kép ("") hoặc đơn ('') đều được

**Options của echo:**
- echo -n "text": Không xuống dòng
- echo -e "text\\ntext": Nhận escape sequences (\\n, \\t)

Ví dụ:
\`\`\`bash
echo "Hello"
echo "World"
# Output:
# Hello
# World

echo -n "Hello "
echo "World"
# Output:
# Hello World

echo -e "Line1\\nLine2"
# Output:
# Line1
# Line2
\`\`\`

**4. STDOUT, STDERR, STDIN**

- STDOUT (Standard Output): Kênh output bình thường (file descriptor 1)
- STDERR (Standard Error): Kênh output lỗi (file descriptor 2)
- STDIN (Standard Input): Kênh input (file descriptor 0)

echo mặc định ghi ra STDOUT.

**GỢI Ý BÀI TẬP:**
\`\`\`bash
echo "Tên: Nguyễn Văn A"
echo "Tuổi: 20"
echo "Sở thích: Lập trình"
\`\`\`

**MỞ RỘNG:**
- Thử thay đổi text và chạy lại
- Thử echo -n để xem khác biệt
- Thử echo -e "Line1\\nLine2\\nLine3"
            `
        },
        {
            id: 'bash-02',
            title: 'Bài 2: Biến (Variables)',
            description: 'Khai báo và sử dụng biến',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Biến trong Bash:
# - Khai báo: tên=giá_trị (KHÔNG có khoảng trắng)
# - Truy cập: $tên hoặc \${tên}
# - Không cần khai báo kiểu dữ liệu
# - Mặc định biến là string

# ===== VÍ DỤ =====
# Khai báo biến
name="Nguyen Van A"
age=25
pi=3.14159
city="Ha Noi"

# Sử dụng biến
echo "Tên: $name"
echo "Tuổi: $age"
echo "Pi: $pi"
echo "Thành phố: \${city}"  # Dùng {} khi cần phân tách

# Tính toán với biến số
next_year=$((age + 1))
double_age=$((age * 2))
echo "Năm sau: $next_year tuổi"
echo "Gấp đôi tuổi: $double_age"

# Nối chuỗi
fullinfo="$name - $age tuổi - $city"
echo "Thông tin: $fullinfo"

# ===== BÀI TẬP =====
# TODO:
# 1. Khai báo biến lưu thông tin sinh viên:
#    - Họ tên
#    - Mã sinh viên (string)
#    - Năm sinh
#    - Ngành học
# 2. Tính tuổi hiện tại (2026 - năm sinh)
# 3. In ra thông tin đầy đủ theo format:
#    "Sinh viên [tên] - MSSV: [mã] - Tuổi: [tuổi] - Ngành: [ngành]"

`,
            explanation: `
**1. KHAI BÁO BIẾN**

Cú pháp: \`tên=giá_trị\` (KHÔNG có khoảng trắng xung quanh =)

**SAI:**
\`\`\`bash
name = "John"    # Sai: có khoảng trắng
age = 25         # Sai: có khoảng trắng
\`\`\`

**ĐÚNG:**
\`\`\`bash
name="John"      # Đúng
age=25           # Đúng
city="Ha Noi"    # Đúng
\`\`\`

**Quy tắc đặt tên:**
- Bắt đầu bằng chữ cái hoặc underscore (_)
- Chỉ chứa: chữ, số, underscore
- Phân biệt HOA/thường
- Không dùng từ khóa (if, for, while...)

**2. TRUY CẬP BIẾN**

2 cách:
- \`$tên\`: Cách phổ biến
- \`\${tên}\`: Khi cần phân tách rõ ràng

Ví dụ:
\`\`\`bash
file="report"
echo "$file.txt"     # report.txt
echo "\${file}_v2"   # report_v2 (cần {} để phân tách)
\`\`\`

**3. KIỂU DỮ LIỆU**

Bash không có kiểu dữ liệu rõ ràng:
- Mặc định mọi biến đều là STRING
- Phép toán cần syntax đặc biệt: \`$((...))\`

\`\`\`bash
x=10
y=20
echo "$x + $y"       # Output: 10 + 20 (string concat)
echo "$((x + y))"    # Output: 30 (arithmetic)
\`\`\`

**4. BIẾN ĐẶC BIỆT**

Bash có các biến built-in:
- \`$0\`: Tên script
- \`$1, $2, ...\`: Tham số dòng lệnh
- \`$#\`: Số lượng tham số
- \`$@\`: Tất cả tham số
- \`$?\`: Exit code lệnh trước
- \`$$\`: Process ID của shell hiện tại
- \`$HOME\`: Thư mục home
- \`$PWD\`: Thư mục hiện tại
- \`$PATH\`: Đường dẫn tìm kiếm lệnh

**5. BIẾN READONLY VÀ EXPORT**

\`\`\`bash
readonly PI=3.14159  # Biến không thể thay đổi
export NAME="John"   # Export để subshell truy cập
\`\`\`

**6. NỐI CHUỖI**

\`\`\`bash
first="Hello"
last="World"
full="$first $last"        # Hello World
combined=\${first}\${last}  # HelloWorld
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
ho_ten="Tran Van B"
ma_sv="SV12345"
nam_sinh=2003
nganh="CNTT"

tuoi=$((2026 - nam_sinh))

echo "Sinh viên $ho_ten - MSSV: $ma_sv - Tuổi: $tuoi - Ngành: $nganh"
\`\`\`

**MỞ RỘNG:**
- Thử thay đổi giá trị và xem kết quả
- Thử khai báo sai (có khoảng trắng) để hiểu lỗi
- Thử dùng \${} và $() trong các trường hợp khác
            `
        },
        {
            id: 'bash-03',
            title: 'Bài 3: Phép tính',
            description: 'Các phép toán số học',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Bash hỗ trợ 2 loại phép toán:
# 1. Số nguyên: $((...))
# 2. Số thực: bc (basic calculator)

# ===== VÍ DỤ =====
a=10
b=3

# Phép toán số nguyên
echo "===== PHÉP TOÁN SỐ NGUYÊN ====="
echo "a = $a, b = $b"
echo "a + b = $((a + b))"
echo "a - b = $((a - b))"
echo "a * b = $((a * b))"
echo "a / b = $((a / b))"     # Chia lấy phần nguyên
echo "a % b = $((a % b))"     # Chia lấy phần dư
echo "a ** 2 = $((a ** 2))"   # Lũy thừa

# Phép toán số thực với bc
echo ""
echo "===== PHÉP TOÁN SỐ THỰC (bc) ====="
result=$(echo "scale=2; $a / $b" | bc)
echo "$a / $b = $result"

pi=$(echo "scale=4; 22/7" | bc)
echo "Pi ≈ $pi"

# Increment/Decrement
x=5
echo ""
echo "x ban đầu: $x"
x=$((x + 1))
echo "x sau khi tăng 1: $x"
x=$((x - 1))
echo "x sau khi giảm 1: $x"

# ===== BÀI TẬP =====
# TODO:
# 1. Nhập 3 số a=15, b=4, c=7
# 2. Tính và in ra:
#    - Tổng của 3 số
#    - Trung bình cộng (dùng bc, 2 chữ số thập phân)
#    - (a + b) * c
#    - a^2 + b^2 + c^2
# 3. Kiểm tra a có chia hết cho b không (dùng %)

`,
            explanation: `
**1. PHÉP TOÁN SỐ NGUYÊN: $(())**

Cú pháp: \`$((biểu_thức))\`

**Các toán tử:**
\`\`\`bash
+     # Cộng
-     # Trừ
*     # Nhân
/     # Chia (lấy phần nguyên)
%     # Chia lấy phần dư (modulo)
**    # Lũy thừa
\`\`\`

**Ví dụ:**
\`\`\`bash
x=10
y=3
echo "$((x + y))"    # 13
echo "$((x - y))"    # 7
echo "$((x * y))"    # 30
echo "$((x / y))"    # 3 (không phải 3.333...)
echo "$((x % y))"    # 1
echo "$((x ** 2))"   # 100
\`\`\`

**LƯU Ý QUAN TRỌNG:**
- Chỉ hỗ trợ số nguyên (integer)
- Phép chia / trả về phần nguyên, KHÔNG làm tròn
- 10/3 = 3, không phải 3.33

**2. SO SÁNH VỚI CÁC NGÔN NGỮ KHÁC**

\`\`\`bash
# Bash (số nguyên)
echo "$((10 / 3))"        # 3

# Python
print(10 / 3)             # 3.333...
print(10 // 3)            # 3 (integer division)

# C/Java
int result = 10 / 3;      // 3
double result = 10.0 / 3; // 3.333...
\`\`\`

**3. PHÉP TOÁN SỐ THỰC: bc**

bc (basic calculator) là chương trình tính toán bên ngoài.

**Cú pháp:**
\`\`\`bash
echo "scale=n; biểu_thức" | bc
\`\`\`
- \`scale=n\`: Số chữ số thập phân
- \`| bc\`: Pipe sang bc để tính

**Ví dụ:**
\`\`\`bash
# Chia số thực
echo "scale=2; 10/3" | bc     # 3.33
echo "scale=4; 10/3" | bc     # 3.3333

# Tính Pi
echo "scale=6; 22/7" | bc     # 3.142857

# Biểu thức phức tạp
x=10
y=3
result=$(echo "scale=2; ($x + $y) / 2" | bc)
echo "Trung bình: $result"   # 6.50
\`\`\`

**4. INCREMENT/DECREMENT**

\`\`\`bash
x=5

# Cách 1: Tính toán lại
x=$((x + 1))    # x = 6

# Cách 2: Dùng let
let x++         # x = 7
let x--         # x = 6

# Cách 3: expr (cũ, ít dùng)
x=$(expr $x + 1)
\`\`\`

**5. THỨ TỰ ƯU TIÊN**

1. \`()\`: Ngoặc đơn
2. \`**\`: Lũy thừa
3. \`*, /, %\`: Nhân, chia, modulo
4. \`+, -\`: Cộng, trừ

\`\`\`bash
echo "$((2 + 3 * 4))"       # 14 (3*4 trước)
echo "$(((2 + 3) * 4))"     # 20 (ngoặc đơn trước)
echo "$((2 ** 3 + 1))"      # 9 (2^3 = 8, +1 = 9)
\`\`\`

**6. BIẾN TRONG BIỂU THỨC**

\`\`\`bash
a=5
b=3

# Không cần $ trong $(())
result=$((a + b))       # Đúng
result=$(($a + $b))     # Cũng đúng nhưng thừa

# Nhưng CẦN $ khi gán
c=a+b                   # SAI: c = "a+b" (string)
c=$((a+b))              # ĐÚNG: c = 8
\`\`\`

**7. KIỂM TRA CHIA HẾT**

\`\`\`bash
a=10
b=3

remainder=$((a % b))
if [ $remainder -eq 0 ]; then
    echo "$a chia hết cho $b"
else
    echo "$a không chia hết cho $b (dư $remainder)"
fi
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
a=15
b=4
c=7

# Tổng
sum=$((a + b + c))
echo "Tổng: $sum"

# Trung bình
avg=$(echo "scale=2; ($a + $b + $c) / 3" | bc)
echo "Trung bình: $avg"

# (a + b) * c
result1=$(( (a + b) * c ))
echo "(a+b)*c = $result1"

# a^2 + b^2 + c^2
result2=$(( a**2 + b**2 + c**2 ))
echo "a²+b²+c² = $result2"

# Chia hết
if [ $((a % b)) -eq 0 ]; then
    echo "$a chia hết cho $b"
else
    echo "$a không chia hết cho $b"
fi
\`\`\`

**MỞ RỘNG:**
- Thử scale=0, scale=5 với bc
- Thử biểu thức phức tạp: (a+b)*(c-d)/e
- So sánh kết quả $(()) vs bc
            `
        },
        {
            id: 'bash-04',
            title: 'Bài 4: Điều kiện (if)',
            description: 'Cấu trúc rẽ nhánh',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# if-elif-else: Rẽ nhánh dựa trên điều kiện
# Cú pháp:
# if [ điều_kiện ]; then
#     lệnh
# elif [ điều_kiện_khác ]; then
#     lệnh
# else
#     lệnh
# fi

# ===== VÍ DỤ =====
score=85

# So sánh số
if [ $score -ge 90 ]; then
    echo "Xuất sắc! (>= 90)"
elif [ $score -ge 80 ]; then
    echo "Giỏi! (>= 80)"
elif [ $score -ge 70 ]; then
    echo "Khá! (>= 70)"
elif [ $score -ge 60 ]; then
    echo "Trung bình! (>= 60)"
else
    echo "Yếu! (< 60)"
fi

# So sánh chuỗi
name="admin"
if [ "$name" = "admin" ]; then
    echo "Chào Admin!"
elif [ "$name" = "user" ]; then
    echo "Chào User!"
else
    echo "Không xác định"
fi

# Kiểm tra file
file="data.txt"
if [ -f "$file" ]; then
    echo "File $file tồn tại"
else
    echo "File $file không tồn tại"
fi

# Toán tử logic: AND, OR
age=25
income=5000
if [ $age -ge 18 ] && [ $income -ge 3000 ]; then
    echo "Đủ điều kiện vay"
else
    echo "Không đủ điều kiện"
fi

# ===== BÀI TẬP =====
# TODO:
# 1. Khai báo biến age=17
# 2. Viết if-else kiểm tra:
#    - Nếu age >= 18: In "Đủ tuổi bỏ phiếu"
#    - Nếu age >= 16: In "Được học lái xe"
#    - Ngược lại: In "Chưa đủ tuổi"
# 3. Khai báo biến password="12345"
# 4. Kiểm tra password == "admin123":
#    - Đúng: "Đăng nhập thành công"
#    - Sai: "Mật khẩu sai"

`,
            explanation: `
**1. CÚ PHÁP IF-ELIF-ELSE**

\`\`\`bash
if [ điều_kiện ]; then
    # Lệnh khi điều kiện đúng
elif [ điều_kiện_2 ]; then
    # Lệnh khi điều kiện 2 đúng
else
    # Lệnh khi tất cả sai
fi  # Kết thúc if (fi = if ngược)
\`\`\`

**LƯU Ý:**
- Phải có khoảng trắng sau \`[\` và trước \`]\`
- \`then\` có thể cùng dòng với \`if\` (dùng \`;\`)
- \`fi\` để kết thúc block if

**2. TOÁN TỬ SO SÁNH SỐ**

\`\`\`bash
-eq    # equal (bằng)
-ne    # not equal (khác)
-gt    # greater than (lớn hơn)
-ge    # greater or equal (lớn hơn hoặc bằng)
-lt    # less than (nhỏ hơn)
-le    # less or equal (nhỏ hơn hoặc bằng)
\`\`\`

**Ví dụ:**
\`\`\`bash
x=10
y=20

if [ $x -eq $y ]; then echo "x = y"; fi
if [ $x -ne $y ]; then echo "x ≠ y"; fi
if [ $x -lt $y ]; then echo "x < y"; fi
if [ $x -le $y ]; then echo "x ≤ y"; fi
if [ $x -gt $y ]; then echo "x > y"; fi
if [ $x -ge $y ]; then echo "x ≥ y"; fi
\`\`\`

**3. TOÁN TỬ SO SÁNH CHUỖI**

\`\`\`bash
=      # Bằng (string equal)
!=     # Khác (string not equal)
-z     # Chuỗi rỗng (zero length)
-n     # Chuỗi không rỗng (non-zero length)
\`\`\`

**Ví dụ:**
\`\`\`bash
str1="hello"
str2="world"

if [ "$str1" = "$str2" ]; then
    echo "Chuỗi giống nhau"
else
    echo "Chuỗi khác nhau"
fi

if [ -z "$str1" ]; then
    echo "Chuỗi rỗng"
else
    echo "Chuỗi không rỗng"
fi
\`\`\`

**LƯU Ý:** Luôn đặt biến chuỗi trong dấu nháy kép \`"$var"\` để tránh lỗi khi chuỗi rỗng.

**4. TOÁN TỬ KIỂM TRA FILE**

\`\`\`bash
-e file    # File tồn tại (exists)
-f file    # Là file thường (regular file)
-d file    # Là thư mục (directory)
-r file    # File có thể đọc (readable)
-w file    # File có thể ghi (writable)
-x file    # File có thể thực thi (executable)
-s file    # File có kích thước > 0 (non-empty)
\`\`\`

**Ví dụ:**
\`\`\`bash
if [ -f "data.txt" ]; then
    echo "data.txt là file"
fi

if [ -d "backup" ]; then
    echo "backup là thư mục"
fi

if [ -x "script.sh" ]; then
    echo "script.sh có thể chạy"
fi
\`\`\`

**5. TOÁN TỬ LOGIC**

**AND (&&):** Cả 2 điều kiện đúng
\`\`\`bash
if [ $age -ge 18 ] && [ $score -ge 50 ]; then
    echo "Pass"
fi
\`\`\`

**OR (||):** 1 trong 2 điều kiện đúng
\`\`\`bash
if [ $day = "Sat" ] || [ $day = "Sun" ]; then
    echo "Cuối tuần"
fi
\`\`\`

**NOT (!):** Phủ định điều kiện
\`\`\`bash
if [ ! -f "file.txt" ]; then
    echo "File không tồn tại"
fi
\`\`\`

**6. [[ ]] VS [ ]**

Bash hỗ trợ 2 cú pháp:
- \`[ ]\`: Cú pháp cũ (POSIX), tương thích với sh
- \`[[ ]]\`: Cú pháp mới (Bash), mạnh hơn

**[[ ]] ưu điểm:**
- Không cần quote biến
- Hỗ trợ regex pattern matching
- Hỗ trợ && và || trong cùng 1 \`[[ ]]\`

\`\`\`bash
# [ ] - cần quote
if [ "$name" = "admin" ]; then
    echo "OK"
fi

# [[ ]] - không cần quote
if [[ $name = admin ]]; then
    echo "OK"
fi

# [[ ]] - AND/OR trong cùng 1 bracket
if [[ $age -ge 18 && $score -ge 50 ]]; then
    echo "Pass"
fi

# [[ ]] - Pattern matching
if [[ $file = *.txt ]]; then
    echo "File text"
fi
\`\`\`

**Khuyến nghị:** Dùng \`[[ ]]\` trong Bash script hiện đại.

**7. IF LỒNG NHAU**

\`\`\`bash
if [ $age -ge 18 ]; then
    if [ $license = "yes" ]; then
        echo "Được lái xe"
    else
        echo "Cần có bằng lái"
    fi
else
    echo "Chưa đủ tuổi"
fi
\`\`\`

**8. VIẾT GỌN (ONE-LINER)**

\`\`\`bash
# if ngắn
if [ $x -gt 10 ]; then echo "Lớn"; fi

# Toán tử ternary (giả lập)
[ $x -gt 10 ] && echo "Lớn" || echo "Nhỏ"
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
age=17

if [ $age -ge 18 ]; then
    echo "Đủ tuổi bỏ phiếu"
elif [ $age -ge 16 ]; then
    echo "Được học lái xe"
else
    echo "Chưa đủ tuổi"
fi

password="12345"
if [ "$password" = "admin123" ]; then
    echo "Đăng nhập thành công"
else
    echo "Mật khẩu sai"
fi
\`\`\`

**MỞ RỘNG:**
- Thử dùng \`[[ ]]\` thay vì \`[ ]\`
- Thử kết hợp && và ||
- Thử kiểm tra file: \`[ -f "test.txt" ]\`
            `
        },
        {
            id: 'bash-05',
            title: 'Bài 5: Vòng lặp (for)',
            description: 'Lặp với for loop',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# for loop: Lặp qua danh sách hoặc dãy số
# 3 cú pháp chính:
# 1. for item in list
# 2. for item in {start..end}
# 3. for ((init; condition; increment))

# ===== VÍ DỤ =====
# Cú pháp 1: Lặp qua list
echo "===== CÚ PHÁP 1: LIST ====="
for i in 1 2 3 4 5; do
    echo "Số $i"
done

echo ""
echo "===== CÚ PHÁP 2: RANGE {start..end} ====="
for i in {1..5}; do
    echo "Count: $i"
done

# Range với bước nhảy
echo ""
echo "Số chẵn từ 0-10:"
for i in {0..10..2}; do
    echo -n "$i "
done
echo ""

# Cú pháp 3: C-style for loop
echo ""
echo "===== CÚ PHÁP 3: C-STYLE ====="
for ((i=1; i<=5; i++)); do
    echo "i = $i"
done

# Tính tổng 1 đến n
echo ""
echo "===== TÍNH TỔNG 1->10 ====="
sum=0
for ((n=1; n<=10; n++)); do
    sum=$((sum + n))
done
echo "Tổng = $sum"

# Lặp qua chuỗi
echo ""
echo "===== LẶP QUA CHUỖI ====="
for name in "An" "Bình" "Châu"; do
    echo "Xin chào $name"
done

# ===== BÀI TẬP =====
# TODO:
# 1. In bảng cửu chương 7 (7x1 đến 7x10)
# 2. Tính giai thừa của 6 (6! = 1*2*3*4*5*6)
# 3. In các số từ 20 đến 1 (đếm ngược)
# 4. Tạo list tên 5 bạn, in ra "Sinh nhật vui vẻ [tên]!"

`,
            explanation: `
**1. CÚ PHÁP FOR - LIST**

\`\`\`bash
for biến in giá_trị1 giá_trị2 giá_trị3; do
    # code sử dụng $biến
done
\`\`\`

**Ví dụ:**
\`\`\`bash
# Lặp qua số
for num in 10 20 30; do
    echo "Số: $num"
done

# Lặp qua chuỗi
for color in red green blue; do
    echo "Màu $color"
done

# Lặp qua file
for file in *.txt; do
    echo "File: $file"
done
\`\`\`

**2. CÚ PHÁP FOR - RANGE {start..end}**

\`\`\`bash
for i in {start..end}; do
    # code
done
\`\`\`

**Range options:**
\`\`\`bash
{1..10}        # 1 2 3 4 5 6 7 8 9 10
{10..1}        # 10 9 8 7 6 5 4 3 2 1
{0..10..2}     # 0 2 4 6 8 10 (bước nhảy 2)
{a..z}         # a b c d e ... z
{A..E}         # A B C D E
\`\`\`

**LƯU Ý:** Range được expand trước khi vòng lặp chạy, không tính động.

**3. CÚ PHÁP C-STYLE FOR**

\`\`\`bash
for ((khởi_tạo; điều_kiện; bước_nhảy)); do
    # code
done
\`\`\`

**Ví dụ:**
\`\`\`bash
# Đếm tăng
for ((i=0; i<5; i++)); do
    echo "$i"
done

# Đếm giảm
for ((i=10; i>0; i--)); do
    echo "$i"
done

# Bước nhảy 2
for ((i=0; i<=10; i+=2)); do
    echo "$i"
done
\`\`\`

**4. SO SÁNH 3 CÚ PHÁP**

| Cú pháp | Use case | Ví dụ |
|---------|----------|-------|
| list | Lặp qua items cố định | \`for x in a b c\` |
| range | Dãy số liên tiếp | \`for i in {1..10}\` |
| C-style | Logic phức tạp, điều kiện động | \`for ((i=0; i<n; i++))\` |

**5. BREAK VÀ CONTINUE**

**break:** Thoát vòng lặp
\`\`\`bash
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        break  # Dừng khi i=5
    fi
    echo "$i"
done
# Output: 1 2 3 4
\`\`\`

**continue:** Bỏ qua iteration hiện tại
\`\`\`bash
for i in {1..5}; do
    if [ $i -eq 3 ]; then
        continue  # Bỏ qua khi i=3
    fi
    echo "$i"
done
# Output: 1 2 4 5
\`\`\`

**6. NESTED FOR LOOP (VÒNG LẶP LỒNG)**

\`\`\`bash
# In bảng cửu chương
for i in {1..3}; do
    for j in {1..3}; do
        echo "$i x $j = $((i * j))"
    done
    echo "---"
done
\`\`\`

**7. LẶP QUA FILE/DIRECTORY**

\`\`\`bash
# Lặp qua tất cả .txt trong thư mục
for file in *.txt; do
    echo "Đọc $file"
    # cat "$file"
done

# Lặp qua subdirectories
for dir in */; do
    echo "Thư mục: $dir"
done
\`\`\`

**8. LẶP QUA OUTPUT CỦA LỆNH**

\`\`\`bash
# Lặp qua kết quả của lệnh
for user in $(cat users.txt); do
    echo "User: $user"
done

# Lặp qua output của ls
for item in $(ls); do
    echo "Item: $item"
done
\`\`\`

**9. SEQ COMMAND**

\`\`\`bash
# seq tạo dãy số
for i in $(seq 1 10); do
    echo "$i"
done

# seq với step
for i in $(seq 1 2 10); do
    echo "$i"  # 1 3 5 7 9
done
\`\`\`

**10. TÍNH TOÁN TRONG FOR**

\`\`\`bash
# Tính tổng
sum=0
for i in {1..100}; do
    sum=$((sum + i))
done
echo "Tổng 1-100: $sum"

# Tính giai thừa
fact=1
for i in {1..5}; do
    fact=$((fact * i))
done
echo "5! = $fact"
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
# 1. Bảng cửu chương 7
for i in {1..10}; do
    echo "7 x $i = $((7 * i))"
done

# 2. Giai thừa 6
fact=1
for i in {1..6}; do
    fact=$((fact * i))
done
echo "6! = $fact"

# 3. Đếm ngược 20->1
for i in {20..1}; do
    echo "$i"
done

# 4. Sinh nhật
for name in "An" "Bình" "Châu" "Dũng" "Em"; do
    echo "Sinh nhật vui vẻ $name!"
done
\`\`\`

**MỞ RỘNG:**
- Thử for với bước nhảy: {0..20..5}
- Thử nested loop in ma trận
- Thử break và continue
            `
        },
        {
            id: 'bash-06',
            title: 'Bài 6: Vòng lặp (while)',
            description: 'Lặp với while loop',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# while loop: Lặp khi điều kiện còn đúng
# Cú pháp:
# while [ điều_kiện ]; do
#     lệnh
# done

# ===== VÍ DỤ =====
# Đếm từ 1 đến 5
echo "===== ĐẾM 1->5 ====="
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

# Tính tổng 1 đến 10
echo ""
echo "===== TÍNH TỔNG 1->10 ====="
sum=0
n=1
while [ $n -le 10 ]; do
    sum=$((sum + n))
    n=$((n + 1))
done
echo "Tổng 1-10: $sum"

# Vòng lặp vô hạn với break
echo ""
echo "===== VÒ

NG LẶP VỚI BREAK ====="
counter=1
while true; do
    echo "Lần $counter"
    counter=$((counter + 1))
    if [ $counter -gt 3 ]; then
        break
    fi
done

# Đọc file từng dòng
echo ""
echo "===== ĐỌC FILE (DEMO) ====="
# while IFS= read -r line; do
#     echo "Dòng: $line"
# done < file.txt
echo "(Bỏ comment để test với file thật)"

# ===== BÀI TẬP =====
# TODO:
# 1. Tính tổng các số chẵn từ 2 đến 20
# 2. In số Fibonacci: 0 1 1 2 3 5 8 13 21 (9 số đầu)
# 3. Đếm ngược từ 10 đến 1, sau đó in "GO!"
# 4. Tìm số nhỏ nhất chia hết cho cả 3 và 7 (bắt đầu từ 1)

`,
            explanation: `
**1. CÚ PHÁP WHILE**

\`\`\`bash
while [ điều_kiện ]; do
    # code
    # nhớ update biến điều kiện để tránh vòng lặp vô hạn
done
\`\`\`

**Ví dụ cơ bản:**
\`\`\`bash
i=1
while [ $i -le 5 ]; do
    echo "$i"
    i=$((i + 1))  # QUAN TRỌNG: increment để tránh vô hạn
done
\`\`\`

**2. WHILE VS FOR**

| while | for |
|-------|-----|
| Điều kiện logic | Lặp qua list/range |
| Số lần lặp không biết trước | Số lần lặp xác định |
| \`while [ $x -lt 100 ]\` | \`for i in {1..10}\` |

**Khi nào dùng while:**
- Không biết trước số lần lặp
- Điều kiện phức tạp
- Đọc file/input
- Chờ event

**Khi nào dùng for:**
- Biết trước số lần lặp
- Lặp qua danh sách
- Dãy số cố định

**3. VÒNG LẶP VÔ HẠN**

\`\`\`bash
# while true luôn đúng -> vô hạn
while true; do
    echo "Đang chạy..."
    sleep 1
    # Cần break hoặc Ctrl+C để dừng
done
\`\`\`

**Use case:**
- Server listening
- Monitoring
- Game loop
- Menu lặp lại

**4. BREAK VÀ CONTINUE**

**break:** Thoát vòng lặp
\`\`\`bash
count=1
while true; do
    echo "$count"
    count=$((count + 1))
    if [ $count -gt 5 ]; then
        break  # Dừng khi count > 5
    fi
done
\`\`\`

**continue:** Bỏ qua iteration hiện tại
\`\`\`bash
i=0
while [ $i -lt 10 ]; do
    i=$((i + 1))
    if [ $((i % 2)) -eq 0 ]; then
        continue  # Bỏ qua số chẵn
    fi
    echo "$i"  # Chỉ in số lẻ
done
\`\`\`

**5. ĐỌC FILE TỪNG DÒNG**

\`\`\`bash
while IFS= read -r line; do
    echo "Dòng: $line"
done < file.txt
\`\`\`

- \`IFS=\`: Giữ nguyên whitespace
- \`read -r\`: Không interpret backslash
- \`< file.txt\`: Redirect input từ file

**6. ĐỌC INPUT TỪ USER**

\`\`\`bash
while true; do
    read -p "Nhập số (0 để thoát): " num
    if [ $num -eq 0 ]; then
        break
    fi
    echo "Bạn nhập: $num"
done
\`\`\`

**7. UNTIL LOOP (ĐỐI LẬP CỦA WHILE)**

\`\`\`bash
# until: Lặp KHI điều kiện SAI (ngược với while)
i=1
until [ $i -gt 5 ]; do
    echo "$i"
    i=$((i + 1))
done

# Tương đương với:
i=1
while [ $i -le 5 ]; do
    echo "$i"
    i=$((i + 1))
done
\`\`\`

**8. NESTED WHILE (WHILE LỒNG)**

\`\`\`bash
i=1
while [ $i -le 3 ]; do
    j=1
    while [ $j -le 3 ]; do
        echo "$i x $j = $((i * j))"
        j=$((j + 1))
    done
    i=$((i + 1))
done
\`\`\`

**9. TRÁNH VÒNG LẶP VÔ HẠN**

**SAI - Vô hạn:**
\`\`\`bash
i=1
while [ $i -le 10 ]; do
    echo "$i"
    # QUÊN INCREMENT -> vô hạn
done
\`\`\`

**ĐÚNG:**
\`\`\`bash
i=1
while [ $i -le 10 ]; do
    echo "$i"
    i=$((i + 1))  # Nhớ update điều kiện
done
\`\`\`

**10. SLEEP TRONG WHILE**

\`\`\`bash
# Check process mỗi 5 giây
count=0
while [ $count -lt 10 ]; do
    echo "Checking... ($count)"
    # Làm gì đó
    sleep 5  # Đợi 5 giây
    count=$((count + 1))
done
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
# 1. Tổng số chẵn 2-20
sum=0
n=2
while [ $n -le 20 ]; do
    sum=$((sum + n))
    n=$((n + 2))
done
echo "Tổng số chẵn 2-20: $sum"

# 2. Fibonacci 9 số đầu
a=0
b=1
count=1
echo -n "$a "
while [ $count -lt 9 ]; do
    echo -n "$b "
    temp=$((a + b))
    a=$b
    b=$temp
    count=$((count + 1))
done
echo ""

# 3. Đếm ngược
n=10
while [ $n -ge 1 ]; do
    echo "$n"
    n=$((n - 1))
done
echo "GO!"

# 4. Chia hết cho 3 và 7
n=1
while true; do
    if [ $((n % 3)) -eq 0 ] && [ $((n % 7)) -eq 0 ]; then
        echo "Số nhỏ nhất: $n"
        break
    fi
    n=$((n + 1))
done
\`\`\`

**MỞ RỘNG:**
- Thử until thay vì while
- Thử nested while
- Thử đọc file với while read
            `
        },
        {
            id: 'bash-07',
            title: 'Bài 7: Arrays',
            description: 'Làm việc với mảng',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Array trong Bash: Danh sách các phần tử
# Khai báo: arr=(item1 item2 item3)
# Truy cập: \${arr[index]} (index bắt đầu từ 0)
# Độ dài: \${#arr[@]}

# ===== VÍ DỤ =====
# Tạo array
echo "===== TẠO VÀ TRUY CẬP ARRAY ====="
fruits=("apple" "banana" "orange" "grape" "mango")

# Độ dài array
echo "Số phần tử: \${#fruits[@]}"

# Truy cập phần tử
echo "Phần tử đầu [0]: \${fruits[0]}"
echo "Phần tử thứ 2 [1]: \${fruits[1]}"
echo "Phần tử cuối: \${fruits[\${#fruits[@]}-1]}"

# In toàn bộ array
echo "Tất cả phần tử: \${fruits[@]}"

# Thêm phần tử
echo ""
echo "===== THÊM/XÓA PHẦN TỬ ====="
fruits+=("kiwi")
echo "Sau khi thêm kiwi: \${fruits[@]}"

# Xóa phần tử (unset)
unset fruits[2]  # Xóa orange
echo "Sau khi xóa [2]: \${fruits[@]}"

# Duyệt array với for
echo ""
echo "===== DUYỆT ARRAY ====="
for fruit in "\${fruits[@]}"; do
    echo "- $fruit"
done

# Array với index không liên tục
echo ""
echo "===== ARRAY INDEX ====="
arr[0]="first"
arr[5]="sixth"
arr[10]="eleventh"
echo "arr[0] = \${arr[0]}"
echo "arr[5] = \${arr[5]}"
echo "arr[10] = \${arr[10]}"
echo "Tất cả indices: \${!arr[@]}"

# ===== BÀI TẬP =====
# TODO:
# 1. Tạo array chứa 5 môn học (Math, Physics, Chemistry, Biology, English)
# 2. In ra tổng số môn học
# 3. In môn học thứ 3
# 4. Thêm môn "History" vào cuối
# 5. Duyệt và in "Môn học: [tên]" cho mỗi môn

`,
            explanation: `
**1. KHAI BÁO ARRAY**

\`\`\`bash
# Cách 1: Khai báo trực tiếp
arr=("item1" "item2" "item3")

# Cách 2: Khai báo từng phần tử
arr[0]="first"
arr[1]="second"
arr[2]="third"

# Cách 3: declare
declare -a arr=("a" "b" "c")

# Array rỗng
empty=()
\`\`\`

**2. TRUY CẬP PHẦN TỬ**

\`\`\`bash
arr=("a" "b" "c" "d" "e")

# Truy cập bằng index (bắt đầu từ 0)
echo "\${arr[0]}"    # a
echo "\${arr[2]}"    # c

# Phần tử cuối
echo "\${arr[-1]}"   # e (Bash 4.3+)
echo "\${arr[\${#arr[@]}-1]}"  # e (tương thích cũ)

# Tất cả phần tử
echo "\${arr[@]}"    # a b c d e
echo "\${arr[*]}"    # a b c d e (khác nhau khi quote)
\`\`\`

**3. ĐỘ DÀI ARRAY**

\`\`\`bash
arr=("a" "b" "c")

# Số phần tử
echo "\${#arr[@]}"   # 3

# Độ dài phần tử cụ thể
echo "\${#arr[0]}"   # 1 (length của "a")
\`\`\`

**4. THÊM/XÓA PHẦN TỬ**

**Thêm:**
\`\`\`bash
arr=("a" "b")

# Thêm cuối
arr+=("c")           # arr = (a b c)

# Thêm nhiều
arr+=("d" "e")       # arr = (a b c d e)

# Gán index cụ thể
arr[10]="x"          # arr[10] = x (các index 5-9 rỗng)
\`\`\`

**Xóa:**
\`\`\`bash
arr=("a" "b" "c" "d")

# Xóa phần tử
unset arr[1]         # Xóa "b", arr = (a c d) nhưng index không đổi

# Xóa toàn bộ array
unset arr
\`\`\`

**5. DUYỆT ARRAY**

**Cách 1: for...in**
\`\`\`bash
arr=("apple" "banana" "orange")

for item in "\${arr[@]}"; do
    echo "$item"
done
\`\`\`

**Cách 2: for với index**
\`\`\`bash
for i in "\${!arr[@]}"; do  # \${!arr[@]} = list indices
    echo "arr[$i] = \${arr[$i]}"
done
\`\`\`

**Cách 3: C-style for**
\`\`\`bash
for ((i=0; i<\${#arr[@]}; i++)); do
    echo "\${arr[$i]}"
done
\`\`\`

**6. SLICING (CẮT ARRAY)**

\`\`\`bash
arr=("a" "b" "c" "d" "e")

# \${arr[@]:start:length}
echo "\${arr[@]:1:3}"   # b c d (từ index 1, lấy 3 phần tử)
echo "\${arr[@]:2}"     # c d e (từ index 2 đến hết)
\`\`\`

**7. SEARCH TRONG ARRAY**

\`\`\`bash
arr=("apple" "banana" "orange")

# Kiểm tra tồn tại
target="banana"
found=0
for item in "\${arr[@]}"; do
    if [ "$item" = "$target" ]; then
        found=1
        break
    fi
done

if [ $found -eq 1 ]; then
    echo "Tìm thấy $target"
else
    echo "Không tìm thấy"
fi
\`\`\`

**8. SẮP XẾP ARRAY**

Bash không có hàm sort built-in cho array. Cần dùng các công cụ bên ngoài:

\`\`\`bash
arr=("c" "a" "b")

# Dùng mapfile và sort
IFS=$'\\n' sorted=($(sort <<<"\\${arr[*]}"))
unset IFS

echo "\${sorted[@]}"  # a b c
\`\`\`

**9. ARRAY VỚI KHOẢNG TRẮNG**

**QUAN TRỌNG:** Luôn quote \`"\${arr[@]}"\` để giữ nguyên khoảng trắng:

\`\`\`bash
arr=("hello world" "foo bar")

# SAI: Mất khoảng trắng
for item in \${arr[@]}; do
    echo "$item"
done
# Output: hello, world, foo, bar (4 dòng)

# ĐÚNG: Giữ nguyên khoảng trắng
for item in "\${arr[@]}"; do
    echo "$item"
done
# Output: hello world, foo bar (2 dòng)
\`\`\`

**10. ARRAY INDICES**

\`\`\`bash
arr[0]="a"
arr[5]="b"
arr[10]="c"

# Lấy tất cả indices
echo "\${!arr[@]}"   # 0 5 10

# Check index tồn tại
if [ -v arr[5] ]; then
    echo "Index 5 tồn tại"
fi
\`\`\`

**11. ARRAY VS STRING**

\`\`\`bash
# String
str="a b c"
echo "$str"          # a b c

# Array
arr=("a" "b" "c")
echo "\${arr[@]}"    # a b c

# Convert string to array
IFS=' ' read -r -a arr <<< "$str"

# Convert array to string
str="\${arr[*]}"
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
# 1. Tạo array môn học
subjects=("Math" "Physics" "Chemistry" "Biology" "English")

# 2. Tổng số môn
echo "Tổng số môn: \${#subjects[@]}"

# 3. Môn thứ 3 (index 2)
echo "Môn thứ 3: \${subjects[2]}"

# 4. Thêm History
subjects+=("History")

# 5. Duyệt và in
for subject in "\${subjects[@]}"; do
    echo "Môn học: $subject"
done
\`\`\`

**MỞ RỘNG:**
- Thử xóa phần tử với unset
- Thử slicing: \${arr[@]:start:length}
- Thử tìm phần tử trong array
            `
        },
        {
            id: 'bash-08',
            title: 'Bài 8: Functions',
            description: 'Tạo hàm trong Bash',
            code: `#!/bin/bash
# ===== LÝ THUYẾT =====
# Function: Nhóm code có thể tái sử dụng
# Cú pháp 1: function_name() { code; }
# Cú pháp 2: function function_name { code; }
# Tham số: $1, $2, $3, ...
# Return: echo (output), return (exit code 0-255)

# ===== VÍ DỤ =====
# Function đơn giản
echo "===== FUNCTION CƠ BẢN ====="
greet() {
    echo "Xin chào, $1!"
}

greet "An"
greet "Bình"

# Function có return value
echo ""
echo "===== FUNCTION VỚI RETURN ====="
add() {
    local result=$(($1 + $2))
    echo $result  # "return" bằng echo
}

sum=$(add 10 20)
echo "10 + 20 = $sum"

# Function với nhiều tham số
echo ""
echo "===== NHIỀU THAM SỐ ====="
info() {
    echo "Tên: $1"
    echo "Tuổi: $2"
    echo "Thành phố: $3"
    echo "Số tham số: $#"
}

info "Châu" 22 "Hà Nội"

# Function đệ quy - Giai thừa
echo ""
echo "===== FUNCTION ĐỆ QUY ====="
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        local prev=$(factorial $(($1 - 1)))
        echo $(($1 * prev))
    fi
}

echo "5! = $(factorial 5)"
echo "7! = $(factorial 7)"

# Function với biến local
echo ""
echo "===== BIẾN LOCAL ====="
demo_scope() {
    local x=10      # Biến cục bộ
    y=20            # Biến toàn cục
    echo "Trong function: x=$x, y=$y"
}

x=5
y=15
echo "Trước function: x=$x, y=$y"
demo_scope
echo "Sau function: x=$x, y=$y"

# ===== BÀI TẬP =====
# TODO:
# 1. Viết function is_even(n) kiểm tra số chẵn
#    - Return 0 nếu chẵn, 1 nếu lẻ (dùng return)
#    - Test với các số 4, 7, 10
# 2. Viết function max(a, b) trả về số lớn hơn
#    - Dùng echo để return
#    - Test: max 15 23
# 3. Viết function fibonacci(n) in n số Fibonacci đầu tiên
#    - Dùng local variables
# 4. Viết function square_sum(a, b, c) tính a²+b²+c²

`,
            explanation: `
**1. KHAI BÁO FUNCTION**

**Cú pháp 1 (phổ biến):**
\`\`\`bash
function_name() {
    # code
}
\`\`\`

**Cú pháp 2:**
\`\`\`bash
function function_name {
    # code
}
\`\`\`

**Cú pháp 3 (one-liner):**
\`\`\`bash
function_name() { echo "Hello"; }
\`\`\`

**Ví dụ:**
\`\`\`bash
say_hello() {
    echo "Hello, World!"
}

say_hello  # Gọi function
\`\`\`

**2. THAM SỐ (PARAMETERS)**

Function nhận tham số qua \`$1, $2, $3, ...\`

\`\`\`bash
greet() {
    echo "Hello, $1!"
}

greet "Alice"    # $1 = "Alice"
greet "Bob"      # $1 = "Bob"
\`\`\`

**Các biến đặc biệt:**
- \`$1, $2, ...\`: Tham số thứ 1, 2, ...
- \`$#\`: Số lượng tham số
- \`$@\`: Tất cả tham số (list)
- \`$*\`: Tất cả tham số (string)
- \`$0\`: Tên script/function

\`\`\`bash
demo() {
    echo "Số tham số: $#"
    echo "Tham số 1: $1"
    echo "Tham số 2: $2"
    echo "Tất cả: $@"
}

demo one two three
# Output:
# Số tham số: 3
# Tham số 1: one
# Tham số 2: two
# Tất cả: one two three
\`\`\`

**3. RETURN VALUE**

Bash function có 2 cách trả giá trị:

**Cách 1: echo (cho giá trị phức tạp)**
\`\`\`bash
add() {
    echo $(($1 + $2))
}

result=$(add 5 3)
echo "5 + 3 = $result"  # 8
\`\`\`

**Cách 2: return (chỉ cho exit code 0-255)**
\`\`\`bash
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # true (chẵn)
    else
        return 1  # false (lẻ)
    fi
}

is_even 4
if [ $? -eq 0 ]; then  # $? = exit code
    echo "4 là số chẵn"
fi
\`\`\`

**LƯU Ý:**
- \`return\` chỉ trả 0-255 (exit code)
- \`echo\` trả string/number bất kỳ
- \`$?\` lưu exit code của lệnh trước

**4. BIẾN LOCAL VS GLOBAL**

**Global:** Biến khai báo ngoài function hoặc trong function không dùng \`local\`
**Local:** Biến khai báo với \`local\` trong function

\`\`\`bash
x=10  # Global

demo() {
    local y=20   # Local
    z=30         # Global (không dùng local)
    echo "Trong function: x=$x, y=$y, z=$z"
}

demo
echo "Ngoài function: x=$x, z=$z"
# echo "$y"  # Lỗi: y không tồn tại ngoài function
\`\`\`

**Best practice:** Luôn dùng \`local\` cho biến trong function để tránh xung đột.

**5. FUNCTION ĐỆ QUY**

Function có thể gọi chính nó:

\`\`\`bash
# Giai thừa
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        prev=$(factorial $(($1 - 1)))
        echo $(($1 * prev))
    fi
}

echo "5! = $(factorial 5)"  # 120
\`\`\`

**Fibonacci:**
\`\`\`bash
fib() {
    if [ $1 -le 1 ]; then
        echo $1
    else
        a=$(fib $(($1 - 1)))
        b=$(fib $(($1 - 2)))
        echo $((a + b))
    fi
}

echo "fib(7) = $(fib 7)"  # 13
\`\`\`

**LƯU Ý:** Đệ quy chậm với số lớn. Dùng loop khi có thể.

**6. FUNCTION VỚI ARRAY**

\`\`\`bash
# Truyền array vào function
sum_array() {
    local arr=("$@")  # $@ = tất cả tham số
    local sum=0
    for num in "\${arr[@]}"; do
        sum=$((sum + num))
    done
    echo $sum
}

nums=(10 20 30 40)
total=$(sum_array "\${nums[@]}")
echo "Tổng: $total"  # 100
\`\`\`

**7. FUNCTION RETURN ARRAY**

\`\`\`bash
get_fruits() {
    echo "apple banana orange"
}

# Gán vào array
fruits=($(get_fruits))
echo "\${fruits[0]}"  # apple
echo "\${fruits[1]}"  # banana
\`\`\`

**8. VALIDATION THAM SỐ**

\`\`\`bash
divide() {
    if [ $# -ne 2 ]; then
        echo "Lỗi: Cần 2 tham số"
        return 1
    fi

    if [ $2 -eq 0 ]; then
        echo "Lỗi: Không chia được cho 0"
        return 1
    fi

    echo "scale=2; $1 / $2" | bc
}

divide 10 3     # OK: 3.33
divide 10       # Lỗi: Cần 2 tham số
divide 10 0     # Lỗi: Không chia được cho 0
\`\`\`

**9. FUNCTION LÀM COMMAND**

Function có thể hoạt động như lệnh:

\`\`\`bash
# Backup function
backup() {
    if [ $# -eq 0 ]; then
        echo "Usage: backup <file>"
        return 1
    fi
    cp "$1" "$1.bak"
    echo "Đã backup $1 -> $1.bak"
}

backup script.sh  # Giống lệnh shell
\`\`\`

**10. SOURCE FUNCTIONS TỪ FILE KHÁC**

\`\`\`bash
# utils.sh
add() { echo $(($1 + $2)); }
multiply() { echo $(($1 * $2)); }

# main.sh
source utils.sh  # hoặc . utils.sh
result=$(add 5 3)
echo "5 + 3 = $result"
\`\`\`

**GỢI Ý BÀI TẬP:**
\`\`\`bash
# 1. is_even
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0
    else
        return 1
    fi
}

for n in 4 7 10; do
    if is_even $n; then
        echo "$n là số chẵn"
    else
        echo "$n là số lẻ"
    fi
done

# 2. max
max() {
    if [ $1 -gt $2 ]; then
        echo $1
    else
        echo $2
    fi
}

echo "max(15, 23) = $(max 15 23)"

# 3. fibonacci
fibonacci() {
    local n=$1
    local a=0
    local b=1
    echo -n "$a "
    for ((i=1; i<n; i++)); do
        echo -n "$b "
        local temp=$((a + b))
        a=$b
        b=$temp
    done
    echo ""
}

fibonacci 8

# 4. square_sum
square_sum() {
    local a=$1
    local b=$2
    local c=$3
    echo $((a**2 + b**2 + c**2))
}

echo "3²+4²+5² = $(square_sum 3 4 5)"
\`\`\`

**MỞ RỘNG:**
- Thử function lồng nhau
- Thử function với array
- Thử source function từ file khác
            `
        }
    ]
};

// Export
window.LESSONS = LESSONS;
