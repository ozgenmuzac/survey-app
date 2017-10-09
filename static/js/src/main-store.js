import { observable } from 'mobx';

export default class MainStore {
    @observable listOfRenders = [
        'First line content',
        'Second line content',
        'Third line content',
    ]
}
