export const Header = ({ title, subTitle }) => {
  return (
    <header className="header">
      <h1 data-testid="title">{title}</h1>
      <p data-testid="subTitle">{subTitle}</p>
    </header>
  )
}
