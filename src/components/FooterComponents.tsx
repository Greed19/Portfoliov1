

type props = {
    title:string
    desc:string[]
}

export const FooterComponents = ({props}:any) => {
  return (
    <div className="w-1/2 flex flex-col items-start gap-5 text-white">
        <span className="text-[32px] primary_text uppercase">{props.title}</span>
        {props.desc?.map((item:any,index:number) => (
            <span key={`${index}${props.title}`}>{item}</span>
        ))}
    </div>
  )
}
