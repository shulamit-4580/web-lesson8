function Sum()
{
    alert(+document.getElementById('num1').value+(+document.getElementById('num2').value))
}
function Mul()
{
    alert(document.getElementById('num1').value*document.getElementById('num2').value)
}
function Pow()
{
    alert(document.getElementById('num1').value**document.getElementById('num2').value)
}
function Save()
{
    let name=document.getElementById('name').value || "אורח"
    let pass=document.getElementById('pass').value ||12345
    alert("שלום"+" "+ name+" "+"סיסמא"+" "+pass)
}
function Binary()
{
    let n1=parseInt(document.getElementById('num1').value,2)
    let n2=parseInt(document.getElementById('num2').value,2)
    alert((n1+n2).toString(2))
}