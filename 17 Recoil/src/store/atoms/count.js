import {atom, selector} from 'recoil';

// export const countAtom = atom({})       // Atom only accepts 1 argument, which is passed as object which has a key and default value.

export const countAtom = atom({
    key: "countAtom",     // unique id with respect to other atoms
    default: 0           // initial value
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})

// Now we can remove all useState and useContext
// these lines of code are equal to defining the const [count, setCount] = useState(0);