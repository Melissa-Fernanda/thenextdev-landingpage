'use client';
import { track } from '@vercel/analytics';
import InputMask from 'react-input-mask';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Confetti from 'react-dom-confetti';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { saveLead } from './actions';

const formScheme = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
});

function NewsSection() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      email: '',
    },
  });

  const [isCompleted, setCompleted] = useState(false);

  const onSubmit = async (values: z.infer<typeof formScheme>) => {
    setCompleted(true);
    await saveLead({
      email: values.email,
    });
    track('pre-enrollment', { location: 'save' });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='default'
          size='lg'
          onClick={() => {
            track('pre-enrollment', { location: 'investment' });
          }}
          className='text-md bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
        >
          Newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w[425px]'>
        <Confetti
          active={isCompleted}
          config={{
            spread: 90,
            elementCount: 200,
          }}
        />
        {isCompleted ? (
          <>
            <DialogHeader>
              <DialogTitle>Confirmação de Inscrição!🎉</DialogTitle>
              <DialogDescription className='space-y-4'>
                <p>
                    Recebemos sua inscrição na nossa newsletter. A partir de agora, você será o primeiro a saber sobre todas as novidades
                </p>
              </DialogDescription>
            </DialogHeader>
            <DialogClose>
              <Button
                variant='outline'
                onClick={() => {
                  setCompleted(false);
                  form.reset();
                }}
              >
                Fechar
              </Button>
            </DialogClose>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Entrar na newsletter e não perca nenhuma notícia!</DialogTitle>
              <DialogDescription>
                Prometemos que não vamos mandar spam, só coisas legais e interessantes!
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder='Seu melhor e-mail...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Enviar</Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default NewsSection;
