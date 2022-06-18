import React, {useState} from 'react';
import Display from './Display';

const Tabs = (props) => {

    const [tabs, setTabs] = useState([
        {
            label: "tab 1",
            content: "this is the content for tab 1 :)",
            click: true
        },
        {
            label: "tab 2",
            content: "this is the content for tab 2 :)",
            click: false

        },
        {
            label: "tab 3",
            content: "this is the content for tab 3 :)",
            click: false
        },
    ])
    const [selected_i, setSelected_i] = useState(0);

    const tabClickHandler = (e, idx, tab) => {
        console.log('clicked -> ', idx);
        setSelected_i(idx);
        console.log(tab)
    }

    return <div>
        {/* {JSON.stringify(tabs)} */}
        {
            tabs.map((tab, i) => {
                return <button className="" key={i} onClick={ (e) => {
                    tabClickHandler(e, i, tab)
                }}>{tab.content}</button>
            })
        }
        <hr/>
        {/* <p>{tabs[selected_i].content}</p> */}
        <Display theTab={tabs[selected_i].content}/>
    </div>
}

export default Tabs;
