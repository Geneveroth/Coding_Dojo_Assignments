import React, {useState} from 'react'

const items =[
    {
        label:'Tab 1',
        content: "This is Tab 1"
    },
    {
        label:'Tab 2',
        content: "This is Tab 2"
    },
    {
        label:'Tab 3',
        content: "This is Tab 3"
    }
]
const Tabs =() =>{     
    const [content, setContent] = useState('');

    const handleTabs=(idx) =>{
        setContent(items[idx].content)
    }
          return(
        <div>
            <div>
                {items.map((tab, idx) => {
                    return(
                        <button  onClick={ () => handleTabs(idx) }key={idx}> {tab.label} </button>
                    )
                })}
            </div>
            <div>{content}</div>
        </div>
    );   
}
export default Tabs