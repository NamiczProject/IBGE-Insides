export async function getName(name, UF, sex, local) {
    try {
        const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}?`
                    + (UF ? 'groupBy=UF&' : '')
                    + ((sex && !UF) ? `sexo=${sex}&` : '')
                    + ((local && !UF) ? `localidade=${local}&` : '')
        console.log(local, url);
        const data = await fetch(url);
        const names = await data.json();
        return names;
    } catch (e) {
        console.log(e)
    }
}