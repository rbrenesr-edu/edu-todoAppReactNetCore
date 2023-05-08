## Actualizar versiones de react y react dom

```
npm install react@latest react-dom@latest
```

Para este ejemplo, se va a utilizar entityFramework  
Se deben instalar los siguentes paquetes desde el Administrador de NuGet-s

```
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
```

Configuracion de EntityFrameworkSql dentro de la carpeta Models

Comando Entity Framework:
```
- Scaffold-DbContext "Server=(local); DataBase=(basedatos);Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
```