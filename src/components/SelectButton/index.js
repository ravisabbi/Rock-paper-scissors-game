import {ListItem, Button, SelectorImage} from './styledComponents'

const SelectButton = props => {
  const {itemDetails, onClickItem} = props
  const {imageUrl, id} = itemDetails

  const clickItem = () => {
    onClickItem(id)
  }

  let testId = ''
  switch (id) {
    case 'ROCK':
      testId = 'rockButton'
      break
    case 'PAPER':
      testId = 'paperButton'
      break

    default:
      testId = 'scissorsButton'
  }
  console.log(testId)
  return (
    <ListItem>
      <Button type="button" onClick={clickItem} data-testid={testId}>
        <SelectorImage src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}

export default SelectButton
