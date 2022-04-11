import { DetailedHTMLProps, HTMLProps, ImgHTMLAttributes } from 'react';

export interface CommentProps extends HTMLProps<HTMLElement> {
  primary?: boolean;
}

export type CommentHeaderProps = HTMLProps<HTMLElement>;

export type CommentBodyProps = HTMLProps<HTMLDivElement>;

export type AvatarProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export type CommentTitleProps = HTMLProps<HTMLHeadingElement>;

export type CommentMetaProps = HTMLProps<HTMLUListElement>;

export type CommentListProps = HTMLProps<HTMLUListElement>;
