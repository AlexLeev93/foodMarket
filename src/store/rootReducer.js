const initialState = {
    worldFoodData: [
        {   
            id: 1,
            country: 'Америка',
            title: 'МАЧЕТЕ СТЕЙК',
            price: 1398,
            quantity: 1,
            text: 'Традиционная американская еда – это незатейливые блюда из простых ингредиентов, приготовление которых не требует много времени и фантазии.',
            imageURLforFirstCardItem: 'https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_960_720.jpg',
            imageURLforSecondCardItem: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/croissants-569075_960_720.jpg',
        },
        {
            id: 2,
            country: 'Италия',
            title: 'ПАСТА ВСЕ В ОДНОЙ СКОВОРОДКЕ',
            price: 390,
            quantity: 1,
            text: 'Путешествуя по этой чудесной стране, можно отведать знаменитую пасту и равиоли, пиццу и воздушный десерт – панакота, блюда из свежей рыбы и овощные супы.',
            imageURLforFirstCardItem: 'https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_960_720.jpg',
            imageURLforSecondCardItem: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg',
        },
        {
            id: 3,
            country: 'Ближний Восток',
            title: 'КАРБОНАРА',
            price: 450,
            quantity: 1,
            text: 'Привлечь кулинарное внимание может лишь что-то неизведанное — например, новый ингредиент, необычные сочетания продуктов. В тренде блюда стран Ближнего Востока и самых ярких его представителей — Ливана, Израиля и Турции. Они яркие, сочные, невероятно насыщенные и интересные на вкус за счет множества специй.',
            imageURLforFirstCardItem: 'https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg',
            imageURLforSecondCardItem: 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg',
        },
        {
            id: 4,
            country: 'Восточная Азия',
            title: 'ЦЕЗАРЬ С КУРИЦЕЙ',
            price: 200,
            quantity: 1,
            text: 'Кухня Восточной Азии имеет многовековые традиции, характерные черты: рационализм, сбалансированность пищевых компонентов. Острые блюда, блюда с низким содержанием жиров, соевые продукты.Одним из основных продуктов азиатской кухни являются рис и лапша и обилие приправ.',
            imageURLforFirstCardItem: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
            imageURLforSecondCardItem: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg',
        },
        {
            id: 5,
            country: 'Местная Кухня',
            title: 'ЦЕЗАРЬ С КУРИЦЕЙ',
            price: 512,
            quantity: 1,
            text: 'Казахстан - это многонациональная страна, поэтому в состав местной кухни входят кулинарные традиции многих народов. В местной кухне, вы найдете знакомые домашние блюда, которые давно полюбились многим семьям.',
            imageURLforFirstCardItem: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
            imageURLforSecondCardItem: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg',
        }
    ],
    selectedItems: [],
    number: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ITEM':
                let find = state.selectedItems.filter(item => item.id == action.payload[0].id)
                if(find.length === 0){
                    return {...state, selectedItems: [...state.selectedItems, ...action.payload] }
                }
                if(find.length !== 0){
                    return {...state, selectedItems: state.selectedItems.map(item => item.id == action.payload[0].id ? Object.assign({}, item, {quantity : item.quantity + 1}) : item )}
                }
        case 'INCREMENT_UP':
            return {...state, selectedItems: state.selectedItems.map(item => item.id == action.id ? Object.assign({}, item, {quantity : item.quantity + 1}) : item)}
        case 'INCREMENT_DOWN':
            return {...state, selectedItems: state.selectedItems.map(item => item.id == action.id ? Object.assign({}, item, {quantity : item.quantity - 1}) : item)}
        case 'REMOVE_ITEM':
            return {...state, selectedItems: state.selectedItems.filter(item => item.id !== action.payload) }
        default:
            return {...state}
    }
}

export default rootReducer