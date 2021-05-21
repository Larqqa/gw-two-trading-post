export class Item {
  chatLink: string;
  description: undefined | string;
  icon: string;
  id: number;
  level: number;
  name: string;
  rarity: string;
  type: string;
  vendorValue: number;
  flags: string[];
  gameTypes: string[];
  restrictions: string[];

  constructor(item: any | Item) {
    this.chatLink = item?.chat_link;
    this.description = item?.description;
    this.icon = item?.icon;
    this.id = item?.id;
    this.level = item?.level;
    this.name = item?.name;
    this.rarity = item?.rarity;
    this.type = item?.type;
    this.vendorValue = item?.vendor_value;
    this.flags = item?.flags;
    this.gameTypes = item?.game_types;
    this.restrictions = item?.restrictions;
  }
}
