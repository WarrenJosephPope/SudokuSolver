export const Board = () => {
    let board = [['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-', '-']]
    const solve = () => {
        let options = {
            'method': 'POST',
            'header': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(board)
        }
        fetch('https://warren-sudoku.herokuapp.com/', options)
            .then(response => response.json())
            .then(data => {
                if(data['result']==='INVALID')
                    alert("Invalid board!")
                else{
                    board = data['result']
                    setBoard()
                }
            })
    }

    const setBoard = () => {
        board.map((val1, ind1) => {
            val1.map((val2, ind2) => {
                if(val2 !== '-')
                    document.getElementsByClassName((ind1*9)+ind2)[0].value = val2
                return 0
            })
            return 0
        })
    }

    return (
        <div id='container'>
            <div className='table-holder'>
                <div className='design'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <table>
                    <tbody>
                    {board.map((val1, ind1) => {
                        return (
                            <tr key={ind1}>
                                {val1.map((_, ind2) => {
                                    return (<td key={(ind1*9)+ind2}><input type='number' className={(ind1*9)+ind2} maxLength='1' onChange={(e) => {
                                        if(e.target.value === '')
                                            board[ind1][ind2] = '-'
                                        else
                                            board[ind1][ind2] = e.target.value[0]
                                    }} /></td>)
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        <button className='btn btn-dark' onClick={(e) => solve()}>Solve</button>
        </div>
    )
}