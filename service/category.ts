import {data} from '../data/dados';

export function getAllCategories() {
    return data.categories;
}

export function getCategoryById(pid: number) {
    return data.categories.find(item=>item.id === pid);
}