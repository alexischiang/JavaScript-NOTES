<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>点击按钮计算数组元素相加后的总和。</p>
<button onclick="myFunction()">点我</button>

<p>数组元素总和: <span id="demo"></span></p>

<script>
    var numbers = [65, 44, 12, 4];
    function myFunction(){
    
        document.getElementById("demo").innerHTML = numbers.reduce(
        (acc,currentValue) =>acc + currentValue
    );
}
</script>

</body>
</html>
