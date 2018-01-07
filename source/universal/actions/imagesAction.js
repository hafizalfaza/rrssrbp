import { TEST, LOAD_IMAGES} from './constants';

export const loadImagesData = () => {
    console.log('asdasdas')
    const data = [
    
    ];

    Array.apply(null, { length: 18 }).map((e, i) => (
        data.push(
        {
            name: 'name',
            key: i + 1,
            image: 'https://unsplash.it/500'
        }),
        data.push(
        {
            name: 'name',
            key: i + 1,
            image: 'https://unsplash.it/499'
        }),
        data.push(
        {
            name: 'name',
            key: i + 1,
            image: 'https://unsplash.it/498'
        }),
        data.push(
        {
            name: 'name',
            key: i + 1,
            image: 'https://unsplash.it/497'
        }),
        data.push(
        {
            name: 'name',
            key: i + 1,
            image: 'https://unsplash.it/496'
        })
    ))


    return {
        type: LOAD_IMAGES,
        payload: data
    }
}