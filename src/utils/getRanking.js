//do decade and sex be a optional parameter withouth them turn to null

export async function getRanking(codeArea, decade, sex) {
    try {
        const url = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?'
                    + (sex ? `sexo=${sex}&` : '')
                    + (decade ? `decada=${decade}&` : '')
                    + (codeArea ? `localidade=${codeArea}&` : '');
        console.log(url);
        const data = await fetch(url);
        const names = await data.json();
        return names;
    } catch (e) {
        console.log(e)
    }
}