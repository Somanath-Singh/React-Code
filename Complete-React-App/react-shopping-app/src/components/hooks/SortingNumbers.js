

export default function SortingNumbers(...list)
{
    list.sort();
    for(var item of list)
    {
        document.writeln(item + "<br>");
    }
}