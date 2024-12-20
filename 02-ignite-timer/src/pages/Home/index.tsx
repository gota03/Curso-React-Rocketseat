import { IoPlayOutline } from "react-icons/io5";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)
})

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
}

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                setAmountSecondsPassed(
                    differenceInSeconds(new Date(), activeCycle.startDate)
                )
            })
        }
        return () => {
            clearInterval(interval);
        }
    }, [activeCycle])

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime())
        
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }
        setCycles(state => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        reset();
    }

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}: ${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>

            <form onSubmit={handleSubmit(handleCreateNewCycle)}>

                <FormContainer>

                    <label htmlFor="task">Vou traballhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Dê um nome para seu projeto"
                        list="task-sugestions"
                        {...register('task')}
                    />
                    
                    <datalist id="task-sugestions">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                    </datalist>
                    
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                        // utilizando spread operator para acoplar como atributo da tag os métodos devolvidos pela função register
                    />
                    
                    <span>minutos.</span>

                </FormContainer>               

                <CountdownContainer>

                    <span>{ minutes[0] }</span>
                    <span>{ minutes[1] }</span>

                    <Separator>:</Separator>

                    <span>{ seconds[0] }</span>
                    <span>{ seconds[1] }</span>

                </CountdownContainer>

                <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                    <IoPlayOutline size={24} />
                    Começar
                </StartCountdownButton>

            </form>
                
        </HomeContainer>
    )
}