// Lessons Data
const LESSONS = {
    tcl: [
        {
            id: 'tcl-01',
            title: 'Bài 1: Hello World',
            description: 'Làm quen với TCL',
            code: `# Câu lệnh đầu tiên trong TCL
puts "Hello, World!"

# In nhiều dòng
puts "Chào mừng đến với"
puts "TCL Programming"`,
            explanation: `
**Lệnh puts**

Lệnh 'puts' dùng để in ra màn hình.
Cú pháp: puts "nội dung"

Thử chỉnh sửa và chạy code!
            `
        },
        {
            id: 'tcl-02',
            title: 'Bài 2: Biến (Variables)',
            description: 'Khai báo và sử dụng biến',
            code: `# Khai báo biến
set name "Nguyen Van A"
set age 25
set pi 3.14159

# In giá trị biến
puts "Tên: $name"
puts "Tuổi: $age"
puts "Pi: $pi"

# Tính toán với biến
set nextYear [expr {$age + 1}]
puts "Năm sau bạn $nextYear tuổi"`,
            explanation: `
**Biến trong TCL**

- Khai báo: set tên_biến giá_trị
- Sử dụng: $tên_biến
- Tính toán: expr {biểu_thức}
            `
        },
        {
            id: 'tcl-03',
            title: 'Bài 3: Phép tính (Expressions)',
            description: 'Các phép toán số học',
            code: `# Phép cộng, trừ, nhân, chia
set a 10
set b 3

puts "a + b = [expr {$a + $b}]"
puts "a - b = [expr {$a - $b}]"
puts "a * b = [expr {$a * $b}]"
puts "a / b = [expr {$a / $b}]"
puts "a % b = [expr {$a % $b}]"

# Lũy thừa
puts "a ^ b = [expr {$a ** $b}]"`,
            explanation: `
**Phép toán**

+ : Cộng
- : Trừ
* : Nhân
/ : Chia
% : Chia lấy dư
** : Lũy thừa
            `
        },
        {
            id: 'tcl-04',
            title: 'Bài 4: Điều kiện (if-else)',
            description: 'Cấu trúc rẽ nhánh',
            code: `set score 85

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
}`,
            explanation: `
**Câu lệnh if**

Cú pháp:
if {điều_kiện} {
    # code
} elseif {điều_kiện_2} {
    # code
} else {
    # code
}
            `
        },
        {
            id: 'tcl-05',
            title: 'Bài 5: Vòng lặp (for)',
            description: 'Lặp với số lần xác định',
            code: `# Vòng lặp cơ bản
for {set i 1} {$i <= 5} {incr i} {
    puts "Số $i"
}

puts "---"

# Bảng cửu chương
set n 7
puts "Bảng cửu chương $n:"
for {set i 1} {$i <= 10} {incr i} {
    puts "$n x $i = [expr {$n * $i}]"
}`,
            explanation: `
**Vòng lặp for**

Cú pháp:
for {khởi_tạo} {điều_kiện} {bước_nhảy} {
    # code
}

incr i : tăng i lên 1
incr i 2 : tăng i lên 2
            `
        },
        {
            id: 'tcl-06',
            title: 'Bài 6: Vòng lặp (while)',
            description: 'Lặp theo điều kiện',
            code: `# While loop
set count 1

while {$count <= 5} {
    puts "Count: $count"
    incr count
}

puts "---"

# Tính tổng
set sum 0
set n 1
while {$n <= 10} {
    set sum [expr {$sum + $n}]
    incr n
}
puts "Tổng từ 1 đến 10: $sum"`,
            explanation: `
**Vòng lặp while**

Cú pháp:
while {điều_kiện} {
    # code
}

Chạy khi điều kiện đúng
            `
        },
        {
            id: 'tcl-07',
            title: 'Bài 7: Lists',
            description: 'Làm việc với danh sách',
            code: `# Tạo list
set fruits {apple banana orange grape}

# Độ dài list
puts "Số phần tử: [llength $fruits]"

# Truy cập phần tử
puts "Phần tử đầu: [lindex $fruits 0]"
puts "Phần tử thứ 2: [lindex $fruits 1]"

# Thêm phần tử
lappend fruits "mango"
puts "Sau khi thêm: $fruits"

# Duyệt list
foreach fruit $fruits {
    puts "- $fruit"
}`,
            explanation: `
**Lists trong TCL**

llength : độ dài
lindex : truy cập phần tử
lappend : thêm phần tử
foreach : duyệt list
            `
        },
        {
            id: 'tcl-08',
            title: 'Bài 8: Procedures (Functions)',
            description: 'Tạo hàm trong TCL',
            code: `# Định nghĩa procedure
proc greet {name} {
    puts "Xin chào, $name!"
}

# Gọi procedure
greet "An"
greet "Bình"

# Procedure có return
proc add {a b} {
    return [expr {$a + $b}]
}

set result [add 10 20]
puts "10 + 20 = $result"

# Procedure tính giai thừa
proc factorial {n} {
    if {$n <= 1} {
        return 1
    } else {
        return [expr {$n * [factorial [expr {$n - 1}]]}]
    }
}

puts "5! = [factorial 5]"`,
            explanation: `
**Procedures**

Cú pháp:
proc tên {tham_số} {
    # code
    return giá_trị
}

Gọi: tên tham_số
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
