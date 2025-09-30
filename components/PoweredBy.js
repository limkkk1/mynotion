/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://linktr.ee/openbuild' // 改成你想要的链接
        className='underline'>
        Openbuild&Ccool
      </a>
      .
    </div>
  )
}
