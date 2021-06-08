import './Size.css'

export const Size = ({ id, size, setSize }) => {
    const changeSizeHandler = e => {
        const value = e.target.value
        setSize(value)
    }

    return (

        <div className={'size'}>
            <div className={'size-input-wrap'}>
                <input id={`radio1-${id}`} type="radio" value="1" name={`shampue-${id}`} onClick={changeSizeHandler} defaultChecked={+size === 1 ? true : false} />
                <label htmlFor={`radio1-${id}`}>
                    <div className="custom-radio">
                        {+size === 1 && <span />} 
                    </div>
                    <div className={'input-value'}>100 мл</div>
                </label>
            </div>
            <div className={'size-input-wrap'}>
                <input id={`radio2-${id}`} type="radio" value="2" name={`shampue-${id}`} onClick={changeSizeHandler} defaultChecked={+size === 2 ? true : false} />
                <label htmlFor={`radio2-${id}`}>
                    <div className="custom-radio">
                        {+size === 2 && <span />}
                    </div>
                    <div className={'input-value'}>200 мл</div>
                </label>
            </div>
            <div className={'size-input-wrap'}>
                <input id={`radio3-${id}`} type="radio" value="3" name={`shampue-${id}`} onClick={changeSizeHandler} defaultChecked={+size === 3 ? true : false} />
                <label htmlFor={`radio3-${id}`}>
                    <div className="custom-radio">
                        {+size === 3 && <span />}
                    </div>
                    <div className={'input-value'}>300 мл</div>
                </label>
            </div>
        </div>

    )
}