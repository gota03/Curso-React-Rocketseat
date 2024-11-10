import { IoPlayOutline } from "react-icons/io5";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    // Register recebe o nome do input e devolve métodos que trabalham com o input
    // watch monitora um campo
    
    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data);
        reset();
    }

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

                    <span>0</span>
                    <span>0</span>

                    <Separator>:</Separator>

                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>

                <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                    <IoPlayOutline size={24} />
                    Começar
                </StartCountdownButton>

            </form>
                
        </HomeContainer>
    )
}