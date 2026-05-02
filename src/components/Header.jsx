export default function Header({ data }) {
  return (
    <header>
      <h1>{data.name}</h1>
      <p className="subtitle">{data.title}</p>
    </header>
  )
}
