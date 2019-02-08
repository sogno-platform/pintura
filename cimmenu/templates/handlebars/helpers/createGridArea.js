import { SafeString } from 'handlebars/runtime';
export default function (column, row, height) {
    let rowStart     = (row + 1).toString();
    let rowEnd       = (row + 1 + height).toString();
    let columnStart  = (column + 1).toString();
    let columnEnd    = (column + 2).toString();
    
    return new SafeString("grid-area: " + rowStart +
                                             " / " + columnStart +
                                             " / " + rowEnd +
                                             " / " + columnEnd);
};

