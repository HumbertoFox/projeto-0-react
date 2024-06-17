const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
export const eventsAvtivityTest = [{
    id: 1,
    title: 'Doador Ciclano',
    start: new Date(currentYear, currentMonth, currentDay, 14, 0),
    end: new Date(currentYear, currentMonth, currentDay, 14, 30),
    desc: 'Veículo',
    color: '#90EE90',
    tipo: 'activity'
},
{
    id: 2,
    title: 'Doador Fulano',
    start: new Date(currentYear, currentMonth, currentDay, 7, 0),
    end: new Date(currentYear, currentMonth, currentDay, 7, 10),
    desc: 'Veículo',
    color: '#3C91E6',
    tipo: 'activity'
}];