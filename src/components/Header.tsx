export interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Welcome" }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}
