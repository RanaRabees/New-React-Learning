"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';

const FRUITS = [
  // # Emoji | Fruit
  "🍈 Avocado",
  "🍐 Apricot",
  "🍎 Apple",
  "😎 Acai",
  "🍒 Brush Cherry",
  "🍞 Breadfruit",
  "😎 Boysenberry",
  "😎 Blueberry",
  "🍊 Blood Orange",
  "😎 Blackcurrant",
  "😎 Blackberry",
  "😎 Black currant",
  "😎 Bilberry",
  "🍌 Banana",
  "🍈 Custard Apple",
  "🍒 Curry Berry",
  "😎 Currant",
  "🥒 Cucumber",
  "🍈 Crenshaw Melon",
  "🍒 Cranberry",
  "🥥 Coconut",
  "😎 Cloudberry",
  "🍋 Clementine",
  "🍒 Cherry",
  "🍈 Cherimoya",
  "🍈 Casaba Melon",
  "🍒 Carambola",
  "🍈 Cantaloupe",
  "🍈 Canary Melon",
  "🍈 Durian",
  "🐉 Dragon fruit",
  "📅 Date",
  "😎 Damson Plum",
  "😎 Elderberry",
  "🍆 Eggplant",
  "🍋 Finger Lime",
  "🍇 Fig",
  "😎 Feijoa",
  "🍈 Guava",
  "😎 Grapefruit",
  "🍇 Grape",
  "😎 Gooseberry",
  "🍒 Goji berry",
  "😎 Huckleberry",
  "🍈 Honeydew Melon",
  "😎 Italian Prune Plum",
  "😎 Jujube",
  "🍒 Java Plum",
  "😎 Jamun",
  "🍈 Jackfruit",
  "🍈 Kumquat",
  "🥝 Kiwi",
  "🍋 Kaffir Lime",
  "🍒 Lychee",
  "🍋 Loquat",
  "🍋 Loganberry",
  "🍋 Lime",
  "🍋 Lemon",
  "😎 Mulberry",
  "🍈 Melon",
  "🍈 Mangosteen",
  "🥭 Mango",
  "🍊 Mandarin",
  "😎 Noni",
  "😎 Nectarine",
  "😎 Nance",
  "🫒 Olive",
  "🍊 Orange",
  "🎃 Pumpkin",
  "🌵 Prickly Pear",
  "😎 Pomelo",
  "😎 Pomegranate",
  "😎 Plum",
  "🍞 Plantain",
  "🍍 Pineapple",
  "🍈 Persimmon",
  "🍐 Pear",
  "🍑 Peach",
  "🍈 Pawpaw",
  "🍈 Passion fruit",
  "🍈 Papaya",
  "🌴 Palm fruit",
  "🍐 Quince",
  "🍎 Rose Apple",
  "🌿 Rhubarb",
  "😎 Red currant",
  "😎 Raspberry",
  "😎 Rambutan",
  "🍋 Sweet lemon",
  "🍈 Sugar Apple",
  "🍓 Strawberry",
  "🍈 Star Apple",
  "😎 Soursop",
  "🍈 Satsuma",
  "😎 Sapodilla",
  "🍅 Tamarillo",
  "😎 Tamarind",
  "🍊 Tangerine",
  "😎 Ugli",
  "🍉 Watermelon",
]

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function Fruitstodo() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item: string) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="outlined" color="primary"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Add fruit to basket
    </Button>
  );

  return (
    <div>
      {addFruitButton}
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {fruitsInBasket.map((item) => (
              <Collapse key={item}>
                {renderItem({ item, handleRemoveFruit })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}
