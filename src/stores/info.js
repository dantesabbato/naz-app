const state = {
  info_en:
    `NAZ model management was founded in 2019 in Moscow. We are representing models for worldwide placement. 
    Our default goal is building successful long lasting careers for our talents.\n` +
    `\n` +
    `We are enthusiastic, first-hand experienced team which is always in search of fresh faces.\n`,
  info_ru:
    `Модельное агентство NAZ model management основано в Москве в 2019 году. Наши модели успешно работают на мировых 
    рынках fashion-индустрии. Основной задачей для нашей команды является успешное продвижение наших моделей 
    и построение их карьеры за рубежом.\n` +
    `\n` +
    `Обладая многолетним опытом в модельном бизнесе, мы находимся в постоянном поиске новых лиц.`
}
const getters = {
  INFO_EN: state => { return state.info_en },
  INFO_RU: state => { return state.info_ru }
}

export default { state, getters }
