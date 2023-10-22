export async function getName(name, UF, sex) {
    try {
        const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}?`
                    + (UF ? 'groupBy=UF&&' : '')
                    + ((sex && !UF) ? `sexo=${sex}&&` : '')
        console.log(url);
        const data = await fetch(url);
        const names = await data.json();
        return names;
    } catch (e) {
        console.log(e)
    }
}