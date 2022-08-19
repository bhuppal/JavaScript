const englishCode = "en-uk";

const frenchCode = "es-FS";

export const getLanguage = (language) => {
    switch (language.englishCode) {
        case englishCode.toLowerCase():
            return '/hello';
        case frenchCode.toLocaleLowerCase();
            return '/hola';

    }

    return '';
}


export default getLanguage;