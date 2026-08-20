// Lessons Data
const LESSONS = {
    tcl: [
        {
            id: 'tcl-01',
            title: 'Bài 1: Hello World',
            description: 'Làm quen với TCL',
            code: `# ===== LÝ THUYẾT =====
# TCL (Tool Command Language): Ngôn ngữ script
# Cú pháp: lệnh tham_số1 tham_số2 ...
# Comment: Bắt đầu bằng #

# ===== VÍ DỤ =====
# Lệnh puts: In ra màn hình
puts "Hello, World!"

# In nhiều dòng
puts "Chào mừng đến với"
puts "TCL Programming"

# In với dấu xuống dòng
puts "Dòng 1\\nDòng 2\\nDòng 3"

# ===== BÀI TẬP =====
# TODO: Tạo chương trình giới thiệu
# 1. In tiêu đề "=== GIỚI THIỆU ==="
# 2. In tên trường của bạn
# 3. In khoa của bạn
# 4. In "=== KẾT THÚC ==="
# (Viết code bên dưới)

`,
            explanation: `
**CÚ PHÁP TCL**
- Lệnh theo sau là tham số
- lệnh tham_số1 tham_số2 ...
- Dấu {} nhóm nhiều từ thành 1 tham số

**LỆNH PUTS**
- puts "text": In ra stdout
- Tự động xuống dòng
- puts -nonewline "text": Không xuống dòng

**COMMENT**
- # comment: Ghi chú
- Phải ở đầu dòng hoặc sau ;

**GỢI Ý BÀI TẬP:**
puts "=== GIỚI THIỆU ==="
puts "Trường: ĐH Bách Khoa"
puts "Khoa: Điện tử"
puts "=== KẾT THÚC ==="
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
# []: Thực thi lệnh và trả về kết quả

# ===== VÍ DỤ =====
# Khai báo biến
set name "Nguyen Van A"
set age 25
set pi 3.14159

# Sử dụng biến
puts "Tên: $name"
puts "Tuổi: $age"
puts "Pi: $pi"

# Tính toán với biến
set nextYear [expr {$age + 1}]
puts "Năm sau: $nextYear tuổi"

# Nối chuỗi
set fullName "$name - Sinh viên"
puts $fullName

# ===== BÀI TẬP =====
# TODO: Quản lý thông tin môn học
# 1. Tạo biến subject (tên môn)
# 2. Tạo biến credits (số tín chỉ)
# 3. Tạo biến grade (điểm)
# 4. In thông tin môn học
# (Viết code bên dưới)

`,
            explanation: `
**KHAI BÁO BIẾN**
- set tên giá_trị
- set name "An"
- set age 20

**SỬ DỤNG BIẾN**
- $tên: Lấy giá trị
- puts $name

**THAY THẾ LỆNH: [...]**
- [lệnh]: Thực thi và trả kết quả
- set x [expr {5 + 3}]
- x = 8

**EXPR: TÍNH TOÁN**
- expr {biểu_thức}
- Bắt buộc có {}
- Hỗ trợ +, -, *, /, %, **

**GỢI Ý BÀI TẬP:**
set subject "Web Programming"
set credits 3
set grade 8.5
puts "Môn: $subject"
puts "Tín chỉ: $credits"
puts "Điểm: $grade"
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
            description: 'Câu lệnh đầu tiên',
            code: `#!/bin/bash
# Câu lệnh echo
echo "Hello, World!"

# In nhiều dòng
echo "Chào mừng đến với"
echo "Bash Scripting"`,
            explanation: `
**Lệnh echo**

echo : in ra màn hình
# : comment (ghi chú)
#!/bin/bash : shebang
            `
        },
        {
            id: 'bash-02',
            title: 'Bài 2: Biến (Variables)',
            description: 'Khai báo và sử dụng biến',
            code: `#!/bin/bash
# Khai báo biến (không có khoảng trắng)
name="Nguyen Van A"
age=25
pi=3.14159

# Sử dụng biến
echo "Tên: $name"
echo "Tuổi: $age"
echo "Pi: $pi"

# Tính toán
next_year=$((age + 1))
echo "Năm sau: $next_year tuổi"`,
            explanation: `
**Biến trong Bash**

Khai báo: tên=giá_trị
Sử dụng: $tên
Tính toán: $((biểu_thức))
            `
        },
        {
            id: 'bash-03',
            title: 'Bài 3: Phép tính',
            description: 'Các phép toán số học',
            code: `#!/bin/bash
a=10
b=3

echo "a + b = $((a + b))"
echo "a - b = $((a - b))"
echo "a * b = $((a * b))"
echo "a / b = $((a / b))"
echo "a % b = $((a % b))"

# Sử dụng bc cho số thực
result=$(echo "scale=2; $a / $b" | bc)
echo "a / b (thực) = $result"`,
            explanation: `
**Phép toán**

$((expr)) : tính toán số nguyên
bc : calculator cho số thực
scale=2 : 2 chữ số thập phân
            `
        },
        {
            id: 'bash-04',
            title: 'Bài 4: Điều kiện (if)',
            description: 'Cấu trúc rẽ nhánh',
            code: `#!/bin/bash
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
fi`,
            explanation: `
**Câu lệnh if**

-eq : bằng
-ne : khác
-gt : lớn hơn
-ge : lớn hơn hoặc bằng
-lt : nhỏ hơn
-le : nhỏ hơn hoặc bằng
            `
        },
        {
            id: 'bash-05',
            title: 'Bài 5: Vòng lặp (for)',
            description: 'Lặp với for loop',
            code: `#!/bin/bash
# For loop cơ bản
for i in 1 2 3 4 5; do
    echo "Số $i"
done

echo "---"

# For loop với range
for i in {1..5}; do
    echo "Count: $i"
done

echo "---"

# C-style for loop
for ((i=1; i<=5; i++)); do
    echo "i = $i"
done`,
            explanation: `
**Vòng lặp for**

for var in list; do
    # code
done

for var in {start..end}; do
    # code
done
            `
        },
        {
            id: 'bash-06',
            title: 'Bài 6: Vòng lặp (while)',
            description: 'Lặp với while loop',
            code: `#!/bin/bash
count=1

while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

echo "---"

# Tính tổng
sum=0
n=1
while [ $n -le 10 ]; do
    sum=$((sum + n))
    n=$((n + 1))
done
echo "Tổng 1-10: $sum"`,
            explanation: `
**Vòng lặp while**

while [ điều_kiện ]; do
    # code
done

Chạy khi điều kiện đúng
            `
        },
        {
            id: 'bash-07',
            title: 'Bài 7: Arrays',
            description: 'Làm việc với mảng',
            code: `#!/bin/bash
# Tạo array
fruits=("apple" "banana" "orange" "grape")

# Độ dài array
echo "Số phần tử: \${#fruits[@]}"

# Truy cập phần tử
echo "Phần tử đầu: \${fruits[0]}"
echo "Phần tử thứ 2: \${fruits[1]}"

# Thêm phần tử
fruits+=("mango")

# Duyệt array
for fruit in "\${fruits[@]}"; do
    echo "- $fruit"
done`,
            explanation: `
**Arrays trong Bash**

array=(item1 item2)
\${array[index]} : truy cập
\${#array[@]} : độ dài
array+=(item) : thêm
            `
        },
        {
            id: 'bash-08',
            title: 'Bài 8: Functions',
            description: 'Tạo hàm trong Bash',
            code: `#!/bin/bash
# Định nghĩa function
greet() {
    echo "Xin chào, $1!"
}

# Gọi function
greet "An"
greet "Bình"

# Function có return
add() {
    local result=$(($1 + $2))
    echo $result
}

sum=$(add 10 20)
echo "10 + 20 = $sum"

# Function factorial
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        local prev=$(factorial $(($1 - 1)))
        echo $(($1 * prev))
    fi
}

echo "5! = $(factorial 5)"`,
            explanation: `
**Functions**

function_name() {
    # code
    echo return_value
}

$1, $2, ... : tham số
local : biến cục bộ
            `
        }
    ]
};

// Export
window.LESSONS = LESSONS;
