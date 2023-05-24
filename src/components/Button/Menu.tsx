export default function menu(props: any) {
  const { name } = props;
  return (
    <li className="flex h-10 cursor-pointer items-center justify-evenly rounded-lg hover:bg-slate-100">
      <label htmlFor="">{name}</label>
      <input
        type="checkbox"
        className="h-5 w-5 bg-red-100"
        placeholder={name}
        name={name}
        value={name}
        id=""
      />
    </li>
  );
}
