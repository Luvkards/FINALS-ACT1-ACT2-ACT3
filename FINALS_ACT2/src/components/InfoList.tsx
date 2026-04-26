const info = [
  { label: 'Name', value: 'Miranda John Nino' },
  { label: 'Degree', value: 'BSIT' },
  { label: 'Location', value: 'Philippines' },
  { label: 'Email', value: 'mirandajohnnino@example.com' },
  { label: 'Languages', value: 'English, Filipino' },
]

export default function InfoList() {
  return (
    <div>
      <h3 className="section-title" style={{ fontSize: '1.3rem' }}>Personal Info</h3>
      <div className="divider" />
      <ul className="info-list">
        {info.map((i) => (
          <li key={i.label}>
            <span>{i.label}:</span>
            <span>{i.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
