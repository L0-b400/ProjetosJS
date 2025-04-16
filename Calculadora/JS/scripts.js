function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('res').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('res').value += valor
        }
        if (valor === '=') {
            var res1 = eval(document.getElementById('res').value)
            document.getElementById('res').value = res1
        }
    } else if(tipo === 'value') {
    document.getElementById('res').value += valor 
    } 
}