export interface Tag {
  id: string;
  name: string;
  color: string;
  noteIds: string[];
  updateTime: number;
  isSelect?: boolean; // is the tag is selected or not
  isCreating?: boolean; // is the tag is being created or not
}
