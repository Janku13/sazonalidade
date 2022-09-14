import { ReactElement } from 'react'

type Props = {
  children?: ReactElement;
};
export default function CustomCard({ children }: Props) {
  return (
    <div className='p-5 mt-5 encartes-container'>
      {children}
    </div>
  )
}
