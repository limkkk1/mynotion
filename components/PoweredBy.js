/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className="mr-1">Powered by</span>
      <a
        href="https://linktr.ee/openbuild" // 你的链接
        className="underline"
        target="_blank" // 点击在新标签打开
        rel="noopener noreferrer"
      >
        Openbuild&Ccool
      </a>
      .
    </div>
  );
}
