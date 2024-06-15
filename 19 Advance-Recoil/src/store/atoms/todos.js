import {atom, atomFamily} from 'recoil';
import { TODOS } from './mockupdata';

export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default: (id) => {
        return TODOS.find((x) => x.id === id)
    }
})

// taking id as input and then finding that todo with id and atlast creating a atom for that particular id
// How to have access to the value and set of a todo atom created by atomFamily ??
// --> useRecoilState(todosAtomFamily(id))  passing the particular id
// similarly  useRecoilValue(todosAtomFamily(id)) and setRecoilState(todosAtomFamily(id))