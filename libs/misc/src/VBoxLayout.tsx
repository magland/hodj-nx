import React, { PropsWithChildren } from "react"

type VBoxLayoutProps = {
    width: number
    heights: number[]
}

const VBoxLayout: React.FunctionComponent<PropsWithChildren<VBoxLayoutProps>> = ({width, heights, children}) => {
    const totalHeight = heights.reduce((a, b) => (a + b), 0)
    const children2 = React.Children.toArray(children).map(ch => (ch as any))
    return (
        <div className="VBoxLayout" style={{position: 'relative', width, height: totalHeight}}>
            {
                children2.map((child: any, i) => {
                    return child ? (
                        <div key={i} style={{position: 'absolute', overflow: 'hidden', background: 'white', left: 0, top: heights.slice(0, i).reduce((a, b) => (a + b), 0), width, height: heights[i]}}>
                            <child.type {...child.props} width={width} height={heights[i]} />
                        </div>
                    ) : <span />
                })
            }
        </div>
    )
}

export default VBoxLayout