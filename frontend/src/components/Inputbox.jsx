export function Inputbox({heading, placeholder, onChange}){
    return <div>
        <div className="font-medium text-sm text-left py-2">{heading}</div>
        <input type="text" placeholder={placeholder} onChange={onChange} className="w-full border border-slate-200 rounded py-2 px-1"/>
    </div>
}