import { Control } from "react-hook-form";

export type FormValues = {
  key1: string;
  key2: number;
  key3: Control<{
    key1: string;
    key2: number;
  }>;
  key4: Control<string[]>;
};
