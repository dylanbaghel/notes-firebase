import moment from 'moment';

export const formatDate = (tiemstamp) => {
    let formattedDateTime = moment(tiemstamp).format('dddd, D MMMM YYYY, h:mm a ');
    return formattedDateTime.toString();
};