import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sortByColumn"
})
export class SortByColumnPipe implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
        if (records != null || records != undefined) {
            return records.sort(function (a, b) {
                if (a[args.property] < b[args.property]) {
                    return -1 * args.direction;
                } else if (a[args.property] > b[args.property]) {
                    return 1 * args.direction;
                } else {
                    return 0;
                }
            });
        }
    }
}
