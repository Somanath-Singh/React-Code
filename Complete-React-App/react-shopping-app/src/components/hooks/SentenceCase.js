

export default function SentenceCase(str)
{
    var firstChar=str.charAt(0);
    var restChars=str.substring(1);
    var sentence=firstChar.toUpperCase() + restChars.toLowerCase();

    return sentence;
}