export const createTextBox = (str: string) => {
  if (str.includes(':') && /\d/.test(str)) {
    const number = str.match(/\d/g);
    const numberStr = number ? number.join('') : '';
    const title = str.replace(numberStr, '');

    return (
      <p>
        {title} <span>{numberStr}</span>
      </p>
    );
  }

  return <p>{str}</p>;
};
