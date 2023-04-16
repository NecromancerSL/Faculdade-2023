//definição do tipo
type MenuOptions = ''| 'all' | 'dog' | 'cat' | 'fish';

//função para o menu funcionar
export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}