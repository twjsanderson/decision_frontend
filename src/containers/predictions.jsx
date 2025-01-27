import { useState } from "react"
import { Box, Kbd, Table } from "@chakra-ui/react"
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "@/components/ui/action-bar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const Predictions = () => {
  const [selection, setSelection] = useState([])

  const hasSelection = selection.length > 0
  const indeterminate = hasSelection && selection.length < items.length

  const rows = items.map((item, key) => (
    <Table.Row
      key={key}
      data-selected={selection.includes(item.title) ? "" : undefined}
    >
      <Table.Cell>
        <Checkbox
          top="1"
          aria-label="Select row"
          checked={selection.includes(item.id)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.id]
                : selection.filter((id) => id !== item.id),
            )
          }}
        />
      </Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.probability}</Table.Cell>
      <Table.Cell>${item.price}</Table.Cell>
    </Table.Row>
  ))

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="6">
              <Checkbox
                top="1"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? items.map((item) => item.id) : [],
                  )
                }}
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Probability</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Delete <Kbd>⌫</Kbd>
          </Button>
          <Button variant="outline" size="sm">
            Share <Kbd>T</Kbd>
          </Button>
        </ActionBarContent>
      </ActionBarRoot>
    </>
  )
}

const items = [
  { id: 1, title: "Ad Spend", probability: 0.8 * 100 + '%', price: 999.99 },
  { id: 2, title: "Ad Spend", probability: 0.8 * 100 + '%', price: 999.99 },
  { id: 3, title: "Ad Spend", probability: 0.8 * 100 + '%', price: 999.99 },
  { id: 4, title: "Ad Spend", probability: 0.8 * 100 + '%', price: 999.99 },  
  { id: 5, title: "Ad Spend", probability: 0.8 * 100 + '%', price: 999.99 },
]

export default Predictions